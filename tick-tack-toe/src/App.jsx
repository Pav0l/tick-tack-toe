import React, { useState, useEffect } from 'react';
import Game from './components/Game';
import styled from 'styled-components';

export default function App() {
  const [squareArr, setSquareArr] = useState([null, null, null, null, null, null, null, null, null]);
  const [isXnext, setIsXNext] = useState(true);

  useEffect(() => {
    // console.log(declareWinner(squareArr));
    // console.log(squareArr);
  }, [squareArr]);

  const squareClick = (id) => {
    const newSquareArr = squareArr.slice();
    newSquareArr[id] = isXnext ? 'X' : 'O';
    setSquareArr(newSquareArr);
    setIsXNext(!isXnext);
    setTimeout(computerTurn, 1000);
  }

  const computerTurn = () => {
    // console.log('O is choosing next');
  };

  const declareWinner = (squareValue) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squareValue[a] && squareValue[a] === squareValue[b] && squareValue[a] === squareValue[c]) {
        return squareValue[a];
      }
    }
    return null;
  }

  return (
    <AppWrapper>
      <StatusWrapper>
        {`Next turn: ${isXnext===true? 'X' : 'O'}`}
      </StatusWrapper>
      <GameWrapper>
        <Game squareClick={squareClick} isXnext={isXnext} />
      </GameWrapper>

      <StatusWrapper>
        {declareWinner(squareArr) ? `${declareWinner(squareArr)} has won!` : `Keep playing!`}
      </StatusWrapper>
    </AppWrapper>
  );

}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

const GameWrapper = styled.div`
  margin: 1rem auto;
  border: 1px solid yellow;
`;

const StatusWrapper = styled.div`
  margin: 1rem 2rem;
  font-size: 2rem;
  text-align: center;
`;