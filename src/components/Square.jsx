import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Square({ squareClick, id, squareArr, emptySquares }) {
  const [disableBtn, setDisable] = useState(false); 

  useEffect(() => {
    if (emptySquares(squareArr).length === 9) {
      setDisable(false);
    }
  }, [squareArr])

  const clickHandler = (event) => {
    event.preventDefault();
    squareClick(id);
    setDisable(true);
  };

  return (
    <StyledSquare
      onClick={clickHandler}
      disabled={disableBtn}
    >
    {
      squareArr[id] === 0
      ? ''
      : squareArr[id] === 'X'
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
