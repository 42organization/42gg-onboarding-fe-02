import React from 'react';
import '../css/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div id='Sidebar'>
      <ul>
        <Link to={'todoPage'}>TodoPage</Link>
        <li>Todo</li>
        <li>Manage</li>
        <li>Permission</li>
      </ul>
      <img src='../../favicon.ico' alt='placeholder' />
    </div>
  );
}

export default Sidebar;
