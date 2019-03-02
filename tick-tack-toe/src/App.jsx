import React from 'react';
import PvP from './components/PlayerVsPlayer';
// import PvC from './components/PlayerVsComputer';
import styled from 'styled-components';

export default function App() {
 
  
  return (
    <AppWrapper>
      <ChoiceBtn>Player vs. Player</ChoiceBtn>
      <ChoiceBtn>Player vs. Computer</ChoiceBtn>


      <PvP />
    </AppWrapper>
  );

}
const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
