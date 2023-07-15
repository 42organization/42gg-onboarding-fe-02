import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ManagerPage from './pages/ManagerPage';
import AdminPage from './pages/AdminPage';
import PageLayout from './PageLayout';
import ErrorPage from './pages/ErrorPage';
import ToDos from './pages/ToDos';
import Profile from './pages/Profile';
import './styles.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <ErrorPage message='존재하지 않는 페이지입니다!' />,
  },
  {
    path: '/main',
    element: <PageLayout />,
    errorElement: <ErrorPage message='존재하지 않는 페이지입니다!' />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'manager', element: <ManagerPage /> },
      { path: 'admin', element: <AdminPage /> },
      { path: 'todos', element: <ToDos /> },
      { path: 'profile', element: <Profile /> },
      {
        path: '*',
        element: <ErrorPage message='존재하지 않는 페이지입니다!' />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
