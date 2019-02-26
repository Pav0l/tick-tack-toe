import React from 'react';
import styled from 'styled-components';
import Square from './Square';

export default function Game({ squareClick, squareArr }) {
  return(
    <div>
      <Row>
        <Square id={0} squareClick={squareClick} squareArr={squareArr} />
        <Square id={1} squareClick={squareClick} squareArr={squareArr} />
        <Square id={2} squareClick={squareClick} squareArr={squareArr} />
      </Row>
      <Row>
        <Square id={3} squareClick={squareClick} squareArr={squareArr} />
        <Square id={4} squareClick={squareClick} squareArr={squareArr} />
        <Square id={5} squareClick={squareClick} squareArr={squareArr} />
      </Row>
      <Row>
        <Square id={6} squareClick={squareClick} squareArr={squareArr} />
        <Square id={7} squareClick={squareClick} squareArr={squareArr} />
        <Square id={8} squareClick={squareClick} squareArr={squareArr} />
      </Row>
    </div>
  );
}

const Row = styled.div`
  display: table;
`;