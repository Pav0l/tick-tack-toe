import React, { useEffect } from 'react';

export default function Improver(PvPComponent) {
  return function improvedFunc({ 
    setIsXNext, setSquareArr, squareArr, isXnext,
    emptySquares, declareWinner, winningLines, squareClick, resetGame
  }) {

    useEffect(() => {
      // run computer turn on its turn and if there are some empty squares
      if (isXnext === false && 
        emptySquares(squareArr).length !==0 &&
        declareWinner(squareArr) === null
        ) {
        computerTurn();
      }
    }, [isXnext]);
  
    const human = 'X';
    const computer = 'O';
  
    // check if there is a WIN/LOSE condition (two squares has the same symbol in row/col/diag)
    const isThereEndGameCondition = (arrOfSquares, player) => {
      const endGameConditions = [];
      for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (
          // two squares are equal and thrid one must be empty
          (arrOfSquares[a] === player && arrOfSquares[b] === player && arrOfSquares[c] === 0) ||
          (arrOfSquares[a] === player && arrOfSquares[c] === player && arrOfSquares[b] === 0) ||
          (arrOfSquares[b] === player && arrOfSquares[c] === player && arrOfSquares[a] === 0)
        ) {
          endGameConditions.push({
            line: i,
            result: [arrOfSquares[a], arrOfSquares[b], arrOfSquares[c]]
          })
        }
      }
      return endGameConditions;
    }
  
    const executeEndGameCondition = (endCondition) => {
      const newSquareArr = squareArr.slice();
      // get line of winning/losing array
      const endLine = endCondition[0].line;
      // get ID inside winning line which is empty
      const idInEndLine = endCondition[0].result.indexOf(0);
      // get new ID where 'O' will be placed
      const idInNewArr = winningLines[endLine][idInEndLine];
  
      newSquareArr[idInNewArr] = 'O';
      setSquareArr(newSquareArr);
      setIsXNext(true);
    }
  
    const computerTurn = () => {
      const winCondition = isThereEndGameCondition(squareArr, computer);
      const loseCondition = isThereEndGameCondition(squareArr, human);
  
      if (winCondition.length !== 0) {
        executeEndGameCondition(winCondition);
  
      } else if (loseCondition.length !== 0) {
        executeEndGameCondition(loseCondition);
  
      } else {
        // if there is no WIN/LOSE condition, select a random empty square
        const emptyArrIndexes = [];
        const newSquareArr = squareArr.slice();
        for (let i = 0; i < newSquareArr.length; i++) {
          if (newSquareArr[i] === 0) {
            emptyArrIndexes.push(i);
          }        
        }
        const randEmptyIdx = emptyArrIndexes.length === 8 && newSquareArr[4] === 0
          ? 4
          : emptyArrIndexes[Math.floor(Math.random() * emptyArrIndexes.length)];
        newSquareArr[randEmptyIdx] = 'O';
        setSquareArr(newSquareArr);
        setIsXNext(true);
      }
    }
    return (
      <PvPComponent
        setIsXNext={setIsXNext}
        setSquareArr={setSquareArr}
        squareArr={squareArr}
        isXnext={isXnext}
        emptySquares={emptySquares}
        declareWinner={declareWinner}
        winningLines={winningLines}
        resetGame={resetGame}
        squareClick={squareClick}
      />
    );
  }
}
