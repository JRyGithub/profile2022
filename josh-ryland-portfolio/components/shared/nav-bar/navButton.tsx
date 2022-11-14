import React from 'react';
import styled from 'styled-components';

const NavButton = ({name,url}:{name: string, url: string}) => {
  return (
    <ListItem className="navbar-item"><Anchor className="navbar-link" href={url}>{name}</Anchor></ListItem>
  );
};

export default NavButton;

const ListItem = styled.li`
  font-size: 2rem;
  padding: 10px;
  color: ${props => props.theme.secondaryColor}
`

const Anchor = styled.a`
  scroll-behavior: smooth;
  text-decoration: none;
  color: inherit;
  &:visited, a:active {
    color: inherit;
  };
  &:hover{
    text-shadow: 3px 3px 10px #ff99cc,-2px 1px 10px #ff99cc;
  };
`
