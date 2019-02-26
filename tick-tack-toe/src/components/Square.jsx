import React from 'react';
import styled from 'styled-components';

export default function Square() {
  return (
    <StyledSquare>X O</StyledSquare>
  );
}

const StyledSquare = styled.button`
  width: 150px;
  height: 150px;
  border: 1px solid black;
  text-align: center;
  background-color: #116DB6;
  color: #F26600;
  font-size: 5rem;
`;