import React, { useState, useEffect } from 'react';
import Game from './components/Game';
import styled from 'styled-components';

export default function App() {
  const [squareArr, setSquareArr] = useState([null, null, null, null, null, null, null, null, null]);
  const [isXnext, setIsXNext] = useState(true);

  useEffect(() => {
    console.log(squareArr);
  }, [squareArr]);

  const squareClick = (id) => {
    const newSquareArr = squareArr.slice();
    newSquareArr[id] = 'X';
    setSquareArr(newSquareArr);
    setIsXNext(false);
    computerTurn();
  }

  const computerTurn = () => {
    
  };

  return (
    <AppWrapper>
      <StatusWrapper>
        {`Next turn: ${isXnext===true? 'X' : 'O'}`}
      </StatusWrapper>
      <GameWrapper>
        <Game squareClick={squareClick} />
      </GameWrapper>

      <StatusWrapper>
          You won!
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