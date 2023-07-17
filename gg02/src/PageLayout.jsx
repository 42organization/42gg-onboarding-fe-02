import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import MainNavigation from './components/MainNavigation';
import loginState from './loginAtom';
import LoginPage from './pages/LoginPage';
import './styles.scss';

function PageLayout() {
  const isLoggedin = useRecoilValue(loginState);

  return (
    <div>
      {!isLoggedin && <Navigate to='/' replace />}
      <MainNavigation />
      <Outlet />
    </div>
  );
}

export default PageLayout;
