import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './component/page/MainPage';
import NormalLoginPage from './component/page/LoginPage/NormalLoginPage';
import AdminLoginPage from './component/page/LoginPage/AdminLoginPage';
import ManagerLoginPage from './component/page/LoginPage/MangerLoginPage';
import NormalPage from './component/page/UserPage/NormalPage';
import AdminPage from './component/page/UserPage/AdminPage';
import ManagerPage from './component/page/UserPage/ManagerPage';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/normalLogin" element={<NormalLoginPage />} />
        <Route path="/adminLogin" element={<AdminLoginPage />} />
        <Route path="/managerLogin" element={<ManagerLoginPage />} />
        <Route path="/normal" element={<NormalPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/manager" element={<ManagerPage />} />
      </Routes>
    </div>
  )
}

export default App;
