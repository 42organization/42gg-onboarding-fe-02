import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './app/pages/HomePage';
import ErrorPage from './app/pages/ErrorPage';
import AdminPage from './app/pages/AdminPage';
import TodoPage from './app/pages/TodoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/adminPage',
        element: <AdminPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/todoPage',
        element: <TodoPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
