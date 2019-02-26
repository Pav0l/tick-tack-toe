import React from 'react';
import styled from 'styled-components';
import Square from './Square';

export default function Game() {
  return(
    <div>
      <Row>
        <Square />
        <Square />
        <Square />
      </Row>
      <Row>
        <Square />
        <Square />
        <Square />
      </Row>
      <Row>
        <Square />
        <Square />
        <Square />
      </Row>
    </div>
  );
}

const Row = styled.div`
  display: table;
`;