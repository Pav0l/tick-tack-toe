import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Board from './Board';
import Button from './Button';
import styled from 'styled-components';

export default function GameDom({
  isXnext,
  squareClick,
  squareArr,
  resetGame,
  emptySquares,
  declareWinner,
}) {

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
        <Button onClickFn={resetGame} textValue='Reset Game' />
        <Link to="/"><Button textValue='Back' /></Link>
      </BtnWrap>
    </AppWrapper>
  );
}

GameDom.propTypes = {
  isXnext: PropTypes.bool.isRequired,
  squareClick: PropTypes.func.isRequired,
  squareArr: PropTypes.array.isRequired,
  resetGame: PropTypes.func.isRequired,
  emptySquares: PropTypes.func.isRequired,
  declareWinner: PropTypes.func.isRequired,
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
