import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';

function MainNavigation() {
  return (
    <header>
      <nav className='nav-bar'>
        <ul>
          <li>
            <Link to='/main/home'>HOME</Link>
          </li>
          <li className='logout'>
            <Link to='/'>SIGN OUT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
