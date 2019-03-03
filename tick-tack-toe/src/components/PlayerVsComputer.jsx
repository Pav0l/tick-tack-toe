import React, { useState, useEffect } from 'react';
import GameDom from './GameDom';

export default function PvC() {
  const [squareArr, setSquareArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [isXnext, setIsXNext] = useState(true);

  useEffect(() => {
    // run computer turn on its turn and if there are some empty squares
    if (isXnext === false && 
      emptySquares(squareArr).length !==0 &&
      declareWinner(squareArr) === null
      ) {
      setTimeout(computerTurn, 1000);
    }
  }, [isXnext]);

  const human = 'X';
  const computer = 'O';

  // find empty squares on the game board
  const emptySquares = (arrOfSquares) => {
    return arrOfSquares.filter(sq => sq === 0);
  }

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
    setIsXNext(!isXnext);
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
      setIsXNext(!isXnext);
    }
  }

  const resetGame = () => {
    setSquareArr([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setIsXNext(true);
  }

  const squareClick = (id) => {
    const newSquareArr = squareArr.slice();
    newSquareArr[id] = isXnext ? 'X' : 'O';
    setSquareArr(newSquareArr);
    setIsXNext(!isXnext);
  }

  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const declareWinner = (boardArr) => {
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (boardArr[a] && boardArr[a] === boardArr[b] && boardArr[a] === boardArr[c]) {
        return boardArr[a] === 'X' ? 'X': 'O';
      }
    }
    return null;
  }

  return (
    <GameDom
      isXnext={isXnext}
      squareClick={squareClick}
      squareArr={squareArr}
      resetGame={resetGame}
      emptySquares={emptySquares}
      declareWinner={declareWinner}
    />
  );
}
