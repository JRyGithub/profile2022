import React from 'react';
import styled from 'styled-components';
import ThemeButton from '../themeButton';
import NavBarMenu from './navBarMenu';
import NavToggleButton from './navToggleButton';

const NavBar = () => {
  return (
    <Header id="navbar">
      <Nav className="navbar-container container">
        <NavToggleButton/>
        <NavBarMenu />
      </Nav>
      <ThemeButton />
    </Header>
  );
};

export default NavBar;

const Header = styled.header`
  z-index: 100;
  position: fixed;
  height: 64px;;
  background-color: ${(props) => props.theme.background};
  left: 0;
  right: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`