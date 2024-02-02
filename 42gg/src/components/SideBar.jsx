import React from 'react';
import '../css/Sidebar.css';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul>
        <li>Todo</li>
        <li>Manage</li>
        <li>Permission</li>
      </ul>
      <img src='../../favicon.ico' alt='placeholder' />
    </div>
  );
}

export default Sidebar;
