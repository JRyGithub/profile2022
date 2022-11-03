import React from 'react';
import styled from 'styled-components';
import { routes } from '../../../routes/routes';
import NavButton from './navButton';

const NavLinks = () => {
  return (
    <NavbarLinks className=" navbar-links">
      {routes.map(route => <NavButton key={route.name} name={route.name} url={route.link} />)}
    </NavbarLinks>
  );
};

export default NavLinks;

const NavbarLinks = styled.div`
  list-style: none;
  position: absolute;
  left: 0;
  right: 0;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.3);
`