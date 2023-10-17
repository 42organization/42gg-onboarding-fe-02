import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar/navbar';
import LoginPage from './Pages/login';
import MainPage from './Pages/main';
import AllPage from './Pages/all';
import AdminPage from './Pages/admin';
import EmptyPage from './Pages/empty';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/all" element={<AllPage />} />
        <Route path="/*" element={<EmptyPage />} />
      </Routes>
    </div>
  );
};

export default App;
