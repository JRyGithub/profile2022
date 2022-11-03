import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext, ThemeTypes } from '../../../contexts/ThemeStore';

const MOON = '/moon.png';
const SUN = '/sun.png';

const ThemeButton = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    switchTheme(theme === ThemeTypes.Light ? ThemeTypes.Dark : ThemeTypes.Light)
  }
  
  return (
    <Toggle onClick={handleToggle}>
      <ThemeImage src={ theme === ThemeTypes.Light ? `${SUN}` : `${MOON}` }/>
    </Toggle>
  );
};

export default ThemeButton;

const Toggle = styled.button`
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
  transition: .2s all ease-in-out;
  background: none;
  color: #222;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    transition: .2s all ease-in-out;
  }
`

const ThemeImage = styled.img`
  max-width: 20px;
`