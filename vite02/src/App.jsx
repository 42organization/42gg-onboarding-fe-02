import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './page/MainPage';
import { NormalLoginPage, ManagerLoginPage, AdminLoginPage } from './page/LoginPage';
import NormalPage from './page/UserPage/NormalPage';
import AdminPage from './page/UserPage/AdminPage';
import ManagerPage from './page/UserPage/ManagerPage';
import { RouteMain, RouteNormal, RouteManager, RouteAdmin } from './component/utils/AuthRoute';
import { RecoilRoot } from 'recoil';


function App() {

  return (
    <div className="App">
      <RecoilRoot>
        <Routes>

          <Route element={<RouteMain />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/normal/Login" element={<NormalLoginPage />} />
            <Route path="/admin/Login" element={<AdminLoginPage />} />
            <Route path="/manager/Login" element={<ManagerLoginPage />} />
          </Route>




          <Route element={<RouteNormal />}>
            <Route path="/normal/home" element={<NormalPage/>}/>
          </Route>

          <Route element={<RouteManager/>}>
            <Route path="/manager/home" element={<ManagerPage/>}/>
          </Route>
          
          <Route element={<RouteAdmin />}>
            <Route path="/admin/home" element={<AdminPage/>}/>
          </Route>


          

        </Routes>
      </RecoilRoot>
    </div>
  )
}

export default App;
