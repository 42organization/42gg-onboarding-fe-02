import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { roleState } from '../../Atoms/role';

import './navbar.scss';

const Navbar: React.FC = () => {
  const [logined, setLogined] = useState<String | null>(null);
  const [role, setRole] = useRecoilState(roleState);
  
  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    setLogined(isLogin);
  });

  const handleLogOut = () => {
    localStorage.removeItem('isLogin');
    setRole("guest");
    setLogined(null);
  };

  return (
    <nav className='navbar'>
      <div className='left'>
        {role === 'guest' ? (
          <Link to={'/login'}>Login</Link>
        ) : (
          <button onClick={handleLogOut}> LogOut </button>
        )}
      </div>
      <div className='right'>
        {role === 'admin' ? <Link to={'/admin'}>Admin</Link> : null}
        {(role === 'manager' || role === 'admin') ? <Link to={'/manager'}>Manager</Link> : null}
        {role !== 'guest' ? <Link to={'/user'}>Users</Link> : null}
        <Link to={'/main'}>Main</Link>
      </div>
    </nav>
  );
};

export default Navbar;
