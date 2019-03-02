import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Button({ textValue, onClickFn }) {
  return (

    <StyledBtn
      onClick={onClickFn}
    >
    {textValue}
    </StyledBtn>

  );
}

Button.defaultProps = {
  textValue: 'Button',
  onClickFn: null,
}

Button.propTypes = {
  textValue: PropTypes.string,
  onClickFn: PropTypes.func,
}

const StyledBtn = styled.button`
  background-color: #F26600;
  color: #FFFFFF;
  font-weight: 600;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 4px;
  margin: 2rem;
  width: 150px;
  cursor: pointer;
`;
