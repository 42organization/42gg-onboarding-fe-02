import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.scss';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ManagerPage from './pages/ManagerPage';
import AdminPage from './pages/AdminPage';
import PageLayout from './PageLayout';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  { path: '/', element: <LoginPage />, errorElement: <ErrorPage /> },
  {
    path: '/main',
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'manager', element: <ManagerPage /> },
      { path: 'admin', element: <AdminPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
