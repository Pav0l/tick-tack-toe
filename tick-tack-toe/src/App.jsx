import React, { Component } from 'react';
import Game from './components/Game';
import styled from 'styled-components';

export default class App extends Component {

  render() {
    return (
      <AppWrapper>
        <GameWrapper>
          <Game />
        </GameWrapper>

        <StatusWrapper>
            You won!
        </StatusWrapper>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 1rem auto; */
  border: 1px solid red;
`;

const GameWrapper = styled.div`
  margin: 1rem auto;
  border: 1px solid yellow;
`;

const StatusWrapper = styled.div`
  margin: 1rem 2rem;
  font-size: 2rem;
  text-align: center;
`;