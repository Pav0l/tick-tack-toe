import React from 'react';
import styled from 'styled-components';
import Square from './Square';

export default function Game({ squareClick }) {
  return(
    <div>
      <Row>
        <Square id={0} squareClick={squareClick} />
        <Square id={1} squareClick={squareClick} />
        <Square id={2} squareClick={squareClick} />
      </Row>
      <Row>
        <Square id={3} squareClick={squareClick} />
        <Square id={4} squareClick={squareClick} />
        <Square id={5} squareClick={squareClick} />
      </Row>
      <Row>
        <Square id={6} squareClick={squareClick} />
        <Square id={7} squareClick={squareClick} />
        <Square id={8} squareClick={squareClick} />
      </Row>
    </div>
  );
}

const Row = styled.div`
  display: table;
`;