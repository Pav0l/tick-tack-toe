import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Board from './Board';
import styled from 'styled-components';

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
    newSquareArr[id] = isXnext ? 1 : 10;
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
    <AppWrapper>
      <StatusWrapper>
        {`Next turn: ${isXnext===true? 'X' : 'O'}`}
      </StatusWrapper>
      <GameWrapper>
        <Board squareClick={squareClick} squareArr={squareArr} />
      </GameWrapper>

      <StatusWrapper>
        {
          emptySquares(squareArr).length !== 0
          ? declareWinner(squareArr) ? `${declareWinner(squareArr)} has won!` : `Keep playing!`
          : `It's a DRAW!`
        }
      </StatusWrapper>
      <BtnWrap>
        <ResetBtn onClick={resetGame}>Reset Game</ResetBtn>
        <Link to="/"><ResetBtn>Back</ResetBtn></Link>
      </BtnWrap>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const GameWrapper = styled.div`
  margin: 1rem auto;
`;

const StatusWrapper = styled.div`
  margin: 1rem 2rem;
  font-size: 2rem;
  text-align: center;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ResetBtn = styled.button`
  background-color: #F26600;
  color: #FFFFFF;
  font-weight: 600;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 4px;
  margin: 1rem;
  width: 150px;
`;
