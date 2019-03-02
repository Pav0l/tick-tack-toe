import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import PvP from './components/PlayerVsPlayer';
import PvC from './components/PlayerVsComputer';
import styled from 'styled-components';

export default function App() {

  const BtnLinks = () => {
    return (
      <BtnWrapper>
        <h1>Select game mode:</h1>
        <div>
          <Link to="/pvp"><ChoiceBtn>Player vs. Player</ChoiceBtn></Link>
          <Link to="/pvc"><ChoiceBtn>Player vs. Computer</ChoiceBtn></Link>
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

const ChoiceBtn = styled.button`
  background-color: #F26600;
  color: #FFFFFF;
  font-weight: 600;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 4px;
  margin: 2rem;
  width: 150px;
`;
