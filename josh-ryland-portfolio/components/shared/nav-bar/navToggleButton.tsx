import React, { useRef, useState  } from 'react';
import styled from 'styled-components';

const NavToggleButton = () => {
  const [isNavbarExpanded,setIsNavbarExpanded] = useState<boolean>(false);
  const myToggleButton = useRef(null);

  const toggleNavbar = () => {
    setIsNavbarExpanded(e => !e);
    myToggleButton.current.setAttribute('aria-expanded', isNavbarExpanded.toString());
  };

  return (
    <Button
      ref={myToggleButton}
      type="button"
      id="navbar-toggle"
      aria-controls="navbar-menu"
      aria-label="Toggle menu"
      aria-expanded={isNavbarExpanded}
      onClick={toggleNavbar}
    >
      <IconBar className="icon-bar"></IconBar>
      <IconBar className="icon-bar"></IconBar>
      <IconBar className="icon-bar"></IconBar>
    </Button>
  );
};

export default NavToggleButton;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &#navbar-toggle:is(:focus, :hover) .icon-bar {
    box-shadow: ${props => props.theme.neonBoxShadow}
  }

  &#navbar-toggle[aria-expanded='true'] .icon-bar:is(:first-child, :last-child) {
    position: absolute;
    margin: 0;
    width: 30px;
  }

  &#navbar-toggle[aria-expanded='true'] .icon-bar:first-child {
    transition: 1s;
    transform: rotate(45deg);
  }

  &#navbar-toggle[aria-expanded='true'] .icon-bar:nth-child(2) {
    opacity: 0;
  }

  &#navbar-toggle[aria-expanded='true'] .icon-bar:last-child {
    transition: 1s;
    transform: rotate(-45deg);
  }
  &#navbar-toggle[aria-expanded='true'] + #navbar-menu {
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    visibility: visible;
  }
`
const IconBar = styled.span`
  display: block;
  width: 25px;
  height: 4px;
  margin: 2px;
  background-color: rgba(255, 255, 255, 0.125);
`
