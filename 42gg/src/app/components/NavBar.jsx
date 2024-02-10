import React from 'react';
import '../css/Navbar.css';
import LogoutButton from './LogoutButton';
import { useSetRecoilState } from 'recoil';
import { pageState } from '../../atom';

function Navbar() {
  let setPage = useSetRecoilState(pageState);
  return (
    <nav className='Navbar'>
      <button className='TodoButton' onClick={() => setPage('todo')}>
        Todo
      </button>
      <button className='DashboardButton' onClick={() => setPage('dashboard')}>
        Dashboard
      </button>
      <button
        className='PermissionButton'
        onClick={() => setPage('permission')}
      >
        Permission
      </button>
      <LogoutButton />
    </nav>
  );
}

export default Navbar;
