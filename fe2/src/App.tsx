import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { roleState } from './Atoms/role';

import Navbar from './Components/Navbar/navbar';
import Sidebar from './Components/Sidebar/sidebar';

import LoginPage from './Pages/login';
import MainPage from './Pages/main';
import AdminPage from './Pages/admin';
import EmptyPage from './Pages/empty';
import ManagerPage from './Pages/manager';
import UserPage from './Pages/user';
import './app.scss';

const App: React.FC = () => {
  const [role, setRole] = useRecoilState(roleState);

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        {role !== "guest" ? <Sidebar /> : <></>}
        <div className='content'>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={role === "guest" ? <LoginPage /> : <Navigate to="/main" />} />
          <Route path="/user" element={role !== "guest" ? <UserPage /> : <Navigate to="/main" />} />
          <Route path="/manager" element={(role === "mananger" ||  role === "admin") ? <ManagerPage /> : <Navigate to="/main" />} />
          <Route path="/admin" element={role === "admin" ? <AdminPage /> : <Navigate to="/main" />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
