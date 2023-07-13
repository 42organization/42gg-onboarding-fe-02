import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import './App.css';

function PageLayout() {
  return (
    <div>
      <MainNavigation />
      <div className='main'>
        <Outlet />
      </div>
    </div>
  );
}

export default PageLayout;
