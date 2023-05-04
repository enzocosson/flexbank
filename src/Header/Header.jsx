import React from 'react';
import './Header.module.scss';

function Header() {
  return (
    <header>
      <h1>Mon application React</h1>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
