import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './app/pages/HomePage';
import ErrorPage from './app/pages/ErrorPage';
import AdminPage from './app/pages/AdminPage';
import ManagerPage from './app/pages/ManagerPage';
import NormalPage from './app/pages/NormalPage';

// /normal/:id
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/normal' element={<NormalPage />} />
          <Route path='/manager' element={<ManagerPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
