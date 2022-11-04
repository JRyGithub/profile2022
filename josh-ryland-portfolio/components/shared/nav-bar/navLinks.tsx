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
  height: 50vh;
  list-style: none;
  position: absolute;
  padding-left: 50px;
  padding-right: 50px;
  top: 12vh;
  background-color: ${(props) => props.theme.backgroundTransparent};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: ${(props) => props.theme.transparentBorder};
  border-radius: 4px;
`
