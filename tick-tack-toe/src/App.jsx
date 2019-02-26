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

  const squareClick = (id, event) => {
    const newSquareArr = squareArr.slice();
    newSquareArr[id] = isXnext ? 'X' : 'O';
    setSquareArr(newSquareArr);
    setIsXNext(!isXnext);

    if (isXnext) {
      event.target.textContent = 'X';
    } else {
      event.target.textContent = 'O';
    }
    
    setTimeout(computerTurn, 1000);
  }

  const resetGame = () => {
    setSquareArr([null, null, null, null, null, null, null, null, null]);
    setIsXNext(true);
  }

  const computerTurn = () => {
    
  };

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

  const declareWinner = (squareValue) => {

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
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
        <Game squareClick={squareClick} squareArr={squareArr} />
      </GameWrapper>

      <StatusWrapper>
        {declareWinner(squareArr) ? `${declareWinner(squareArr)} has won!` : `Keep playing!`}
      </StatusWrapper>
      <ResetBtn onClick={resetGame}>Reset Game</ResetBtn>
    </AppWrapper>
  );

}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const GameWrapper = styled.div`
  margin: 1rem auto;
`;

const StatusWrapper = styled.div`
  margin: 1rem 2rem;
  font-size: 2rem;
  text-align: center;
`;

const ResetBtn = styled.button`
  background-color: #F26600;
  color: #FFFFFF;
  font-weight: 600;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 4px;
  margin: 0 auto;
  width: 150px;
`;