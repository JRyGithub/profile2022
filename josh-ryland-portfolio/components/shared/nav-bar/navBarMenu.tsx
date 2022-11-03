import React from 'react';
import styled from 'styled-components';
import NavLinks from './navLinks';

const NavBarMenu = () => {
  return (
    <Menu id="navbar-menu" aria-labelledby="navbar-toggle">
      <NavLinks />
    </Menu>
  );
};

export default NavBarMenu;

const Menu = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 64px;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  left: 0;
  right: 0;
`
