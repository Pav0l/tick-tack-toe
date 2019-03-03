import React, { useState, useEffect } from 'react';
import GameDom from './GameDom';

export default function PvC() {
  const [squareArr, setSquareArr] = useState(['X', 0, 'X', 'O', 'O', 0, 'O', 0, 0]);
  const [isXnext, setIsXNext] = useState(true);

  useEffect(() => {
    if (isXnext === false) {
      setTimeout(computerTurn, 1000);
    }
  }, [isXnext])

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
    // get ID inside winning array which is empty
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
      const emptyArr = squareArr.indexOf(0);
      const newSquareArr = squareArr.slice();
      newSquareArr[emptyArr] = 'O';
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
        return boardArr[a] === 1 ? 'X': 'O';
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

// determine if a player won the game
/*
const didSomeoneWin = (arrOfSquares, player) => {
  if (
    (arrOfSquares[0] === player && arrOfSquares[1] === player && arrOfSquares[2] === player) ||
    (arrOfSquares[3] === player && arrOfSquares[4] === player && arrOfSquares[5] === player) ||
    (arrOfSquares[6] === player && arrOfSquares[7] === player && arrOfSquares[8] === player) ||
    (arrOfSquares[0] === player && arrOfSquares[3] === player && arrOfSquares[6] === player) ||
    (arrOfSquares[1] === player && arrOfSquares[4] === player && arrOfSquares[7] === player) ||
    (arrOfSquares[2] === player && arrOfSquares[5] === player && arrOfSquares[8] === player) ||
    (arrOfSquares[0] === player && arrOfSquares[4] === player && arrOfSquares[8] === player) ||
    (arrOfSquares[2] === player && arrOfSquares[4] === player && arrOfSquares[6] === player)
  ) {
    return true;
  } else {
    return false;
  }
}
*/

/*
const computerMinmaxLogic = (newArrofSq, player) => {
  const availSquares = emptySquares(newArrofSq);

  if (didSomeoneWin(newArrofSq, human)) {
    return {score: -10};
  } else if (didSomeoneWin(newArrofSq, computer)) {
    return {score: 10};
  } else if (availSquares.length === 0) {
    return {score: 0};
  }

  const moves = [];

  // loop through empty squares
  for (let i = 0; i < availSquares.length; i++) {
    
    // for every empty square create an object
    const move = {};
    // and save the index 
    move.index = newArrofSq[availSquares[i]];

    // asign the empty square the player mark
    newArrofSq[availSquares[i]] = player;


    if (player === computer){
      // recursion - run this function again as human and save score
      const result = computerMinmaxLogic(newArrofSq, human);
      move.score = result.score;
    } else {
      const result = computerMinmaxLogic(newArrofSq, computer);
      move.score = result.score;
    }

    // reset the square to empty space
    newArrofSq[availSquares[i]] = move.index;

    // push the object to the array
    moves.push(move);
  }

  let bestMove;
  // on computer turn calculate the move with highest score
  if (player === computer) {
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }        
    }
  } else {
    // on human turn calculate the move with lowest score
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }        
    }
  }
  console.log('moves ', moves)
  console.log(moves[bestMove])
  return moves[bestMove]
}
*/ 