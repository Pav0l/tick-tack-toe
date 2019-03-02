import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Square({ squareClick, id, squareArr}) {

  const clickHandler = (event) => {
    event.preventDefault();
    squareClick(id);
  };

  return (
    <StyledSquare
      onClick={clickHandler}
    >
    {
      squareArr[id] === 0
      ? ''
      : squareArr[id] === 1
        ? 'X'
        : 'O'
    }
    </StyledSquare>
  );
}

Square.propTypes = {
  squareArr: PropTypes.array.isRequired,
  squareClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

const StyledSquare = styled.button`
  width: 150px;
  height: 150px;
  border: 1px solid #FFFFFF;
  text-align: center;
  background-color: #116DB6;
  color: #F26600;
  font-size: 5rem;
  vertical-align: top;
`;
