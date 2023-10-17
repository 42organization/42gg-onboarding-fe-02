import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar: React.FC = () => {
  const [logined, setLogined] = useState<String | null>(null);

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    setLogined(isLogin);
  });

  const handleLogOut = () => {
    localStorage.removeItem('isLogin');
    setLogined(null);
  };

  return (
    <nav>
      {logined !== 'true' ? (
        <Link to={'/login'}>Login</Link>
      ) : (
        <button onClick={handleLogOut}> LogOut</button>
      )}
      <Link to={'/main'}>Main</Link>
      <Link to={'/admin'}>Admin</Link>
      <Link to={'/all'}>Main</Link>
    </nav>
  );
};

export default Navbar;
