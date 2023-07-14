import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
import './styles.scss';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ManagerPage from './pages/ManagerPage';
import AdminPage from './pages/AdminPage';
import PageLayout from './PageLayout';
import ErrorPage from './pages/ErrorPage';
// import loginState from './atom';

// const login = useRecoilValue(loginState);
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/main',
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'normal', element: <HomePage /> },
      { path: 'manager', element: <ManagerPage /> },
      { path: 'admin', element: <AdminPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
