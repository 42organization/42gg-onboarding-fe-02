import './App.css';
import React from 'react';
import Login from './pages/login';
import Error from './pages/error';
import Lobby from './pages/Lobby';
import Pages1 from './pages/pages1';
import Pages2 from './pages/pages2';
import Admin from './pages/admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from './atoms/authatoms';

function App() {
  const { isLoggedIn } = useRecoilValue(authState);

  function renderRoute() {
    if (isLoggedIn) {
      return (
        <Routes>
          <Route path='/Lobby' element={<Lobby />} />
          <Route path='/guest' element={<Pages1 />} />
          <Route path='/manage' element={<Pages2 />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      );
    }
  }
  return <BrowserRouter>{renderRoute()}</BrowserRouter>;
}

export default App;
