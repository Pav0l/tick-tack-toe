import React, { useState } from 'react';
import GameDom from './GameDom';

export default function PvP() {
  const [squareArr, setSquareArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [isXnext, setIsXNext] = useState(true);

  const resetGame = () => {
    setSquareArr([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setIsXNext(true);
  }
  
  const emptySquares = (arrOfSquares) => {
    return arrOfSquares.filter(sq => sq === 0);
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
