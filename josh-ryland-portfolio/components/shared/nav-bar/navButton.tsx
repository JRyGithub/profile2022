import Link from 'next/link';
import React from 'react';

const NavButton = ({name,url}:{name: string, url: string}) => {
  return (
    <li className="navbar-item"><Link className="navbar-link" href={url}>{name}</Link></li>
  );
};

export default NavButton;