import React, { useState } from 'react';
import Game from './Game';
import styled from 'styled-components';

export default function PvC() {
  const [squareArr, setSquareArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [isXnext, setIsXNext] = useState(true);

  const human = 'X';
  const computer = 'O';

  // find empty squares on the game board
  const emptySquares = (arrOfSquares) => {
    return arrOfSquares.filter(sq => sq === 0);
  }

  // determine if a player won the game
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

    return moves[bestMove]
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

  return (
    <AppWrapper>
      <StatusWrapper>
        {`Next turn: ${isXnext===true? 'X' : 'O'}`}
      </StatusWrapper>
      <GameWrapper>
        <Game squareClick={squareClick} squareArr={squareArr} />
      </GameWrapper>

      <StatusWrapper>
        {/* {declareWinner(squareArr) ? `${declareWinner(squareArr)} has won!` : `Keep playing!`} */}
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
