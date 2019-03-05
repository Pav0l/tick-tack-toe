import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import GameDom from './components/GameDom';
import Improver from './components/PlayerVsComputer';
import Button from './components/Button';
import styled from 'styled-components';

export default function App() {
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
        return boardArr[a] === 'X' ? 'X': 'O';
      }
    }
    return null;
  }

  const BtnLinks = () => {
    return (
      <BtnWrapper>
        <h1>Welcome to TickTackToe</h1>
        <h1>Select game mode:</h1>
        <div>
          <Link to="/pvp"><Button textValue='Player vs. Player' /></Link>
          <Link to="/pvc"><Button textValue='Player vs. Computer' /></Link>
        </div>
      </BtnWrapper>
    );
  }

  const PvC = Improver(GameDom);

  const AppComp = () => {
    return (
      <AppWrapper>

        <Route
          path="/"
          exact
          component={BtnLinks}
        />        

        <Route
          path="/pvp"
          render={props => (
            <GameDom
              {...props}
              squareArr={squareArr}
              isXnext={isXnext}
              squareClick={squareClick}
              resetGame={resetGame}
              emptySquares={emptySquares}
              declareWinner={declareWinner}
            />
          )}
        />

        <Route
          path="/pvc"
          render={props => (
            <PvC
              {...props}
              squareArr={squareArr}
              setSquareArr={setSquareArr}
              isXnext={isXnext}
              setIsXNext={setIsXNext}
              squareClick={squareClick}
              resetGame={resetGame}
              emptySquares={emptySquares}
              declareWinner={declareWinner}
              winningLines={winningLines}
            />
          )}
        />

      </AppWrapper>
    );  
  }
  
  return (
    <Router>
      <Route
        path="/"
        component={AppComp}
      />
    </Router>
  );

}
const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  text-align: center;
`;
