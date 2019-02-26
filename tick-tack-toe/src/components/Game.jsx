import React from 'react';
import styled from 'styled-components';
import Square from './Square';

export default function Game({ squareClick, isXnext }) {
  return(
    <div>
      <Row>
        <Square id={0} squareClick={squareClick} isXnext={isXnext} />
        <Square id={1} squareClick={squareClick} isXnext={isXnext} />
        <Square id={2} squareClick={squareClick} isXnext={isXnext} />
      </Row>
      <Row>
        <Square id={3} squareClick={squareClick} isXnext={isXnext} />
        <Square id={4} squareClick={squareClick} isXnext={isXnext} />
        <Square id={5} squareClick={squareClick} isXnext={isXnext} />
      </Row>
      <Row>
        <Square id={6} squareClick={squareClick} isXnext={isXnext} />
        <Square id={7} squareClick={squareClick} isXnext={isXnext} />
        <Square id={8} squareClick={squareClick} isXnext={isXnext} />
      </Row>
    </div>
  );
}

const Row = styled.div`
  display: table;
`;