import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import MainNavigation from './components/MainNavigation';
import loginState from './loginAtom';
import LoginPage from './pages/LoginPage';
import './styles.scss';

function PageLayout() {
  const isLoggedin = useRecoilValue(loginState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedin) {
      navigate('/', { replace: true });
    }
  }, [isLoggedin]);

  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
}

export default PageLayout;
