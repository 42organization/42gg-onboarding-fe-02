import React from 'react';
import './App.css';
import HomePage from './pages/HomePage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <h1> fail</h1>, // TODO: get error page
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
