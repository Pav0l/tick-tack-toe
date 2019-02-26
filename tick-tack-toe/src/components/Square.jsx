import React from 'react';
import styled from 'styled-components';

export default function Square({ squareClick, id, squareArr}) {

  const clickHandler = (event) => {
    squareClick(id, event);
  };

  return (
    <StyledSquare
      onClick={clickHandler}
    >{squareArr[id]}</StyledSquare>
  );
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