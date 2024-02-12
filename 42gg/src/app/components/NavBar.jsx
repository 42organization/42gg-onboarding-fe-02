import React from 'react';
import '../css/Navbar.css';
import LogoutButton from './LogoutButton';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { pageState, userState } from '../../atom';

function Navbar() {
  let setPage = useSetRecoilState(pageState);
  const { role } = useRecoilValue(userState);

  return (
    <nav className='navbar'>
      <button className='todoButton' onClick={() => setPage('todo')}>
        Todo
      </button>
      {role === 'manager' || role === 'admin' ? (
        <button
          className='dashboardButton'
          onClick={() => setPage('dashboard')}
        >
          Dashboard
        </button>
      ) : null}
      {role === 'admin' ? (
        <button
          className='permissionButton'
          onClick={() => setPage('permission')}
        >
          Permission
        </button>
      ) : null}
      <LogoutButton />
    </nav>
  );
}

export default Navbar;
