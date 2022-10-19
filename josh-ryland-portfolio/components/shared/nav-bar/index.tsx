import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Header id="navbar">
      <nav className="navbar-container container">
        <button
          type="button"
          id="navbar-toggle"
          aria-controls="navbar-menu"
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div id="navbar-menu" aria-labelledby="navbar-toggle">
          <ul className="navbar-links">
            <li className="navbar-item"><a className="navbar-link" href="/">Home</a></li>
            <li className="navbar-item"><a className="navbar-link" href="/products">Products</a></li>
            <li className="navbar-item"><a className="navbar-link" href="/projects">Projects</a></li>
            <li className="navbar-item"><a className="navbar-link" href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </Header>
  );
};

export default NavBar;

const Header = styled.header`
z-index: 100;
  position: fixed;
  height: 64px;;
  background-color: white;
  left: 0;
  right: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`