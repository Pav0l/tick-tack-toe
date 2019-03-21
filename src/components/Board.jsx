import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Square from './Square';

export default function Board({ squareClick, squareArr, emptySquares }) {
  return(
    <StyledBoard>

      {
        squareArr.map((square, idx) => (
          <Square
            key={idx}
            id={idx}
            squareClick={squareClick}
            squareArr={squareArr}
            emptySquares={emptySquares}
          />
        ))
      }
    </StyledBoard>
  );
}

Board.propTypes = {
  squareClick: PropTypes.func.isRequired,
  squareArr: PropTypes.array.isRequired,
}

const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 450px;
`;