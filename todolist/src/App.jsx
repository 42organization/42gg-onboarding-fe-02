import './App.css';
import React from 'react';
import Login from './pages/login';
import Error from './pages/error';
import Lobby from './pages/Lobby';
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
