import React, { useState } from 'react';
import styled from 'styled-components';

export default function Square({ squareClick, id, squareArr}) {
  // const [disableBtn, setDisable] = useState(false);

  const clickHandler = (event) => {
    event.preventDefault();
    // onClick DISABLE the BUTTON so IT CAN NOT BE REWRITEN
    squareClick(id);
    // setDisable(true);
  };

  return (
    <StyledSquare
      onClick={clickHandler}
      // disabled={disableBtn}
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