import './App.css';
import React from 'react';
import Login from './pages/login';
import Error from './pages/error';
import Lobby from './pages/Lobby';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Lobby' element={<Lobby />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
