import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import PvP from './components/PlayerVsPlayer';
import PvC from './components/PlayerVsComputer';
import Button from './components/Button';
import styled from 'styled-components';

export default function App() {

  const BtnLinks = () => {
    return (
      <BtnWrapper>
        <h1>Welcome to TickTackToe</h1>
        <h1>Select game mode:</h1>
        <div>
          <Link to="/pvp"><Button textValue='Player vs. Player' /></Link>
          <Link to="/pvc"><Button textValue='Player vs. Computer' /></Link>
        </div>
      </BtnWrapper>
    );
  }

  const AppComp = () => {
    return (
      <AppWrapper>

        <Route
          path="/"
          exact
          component={BtnLinks}
        />        

        <Route
          path="/pvp"
          component={PvP}
        />

        <Route
          path="/pvc"
          component={PvC}
        />

      </AppWrapper>
    );  
  }
  
  return (
    <Router>
      <Route
        path="/"
        component={AppComp}
      />
    </Router>
  );

}
const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  text-align: center;
`;
