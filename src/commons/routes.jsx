import { Home, Login } from '../pages';
import { authType } from '../types';

export const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    auth: authType.NORMAL,
  },
  {
    path: '/login',
    name: 'Login',
    element: <Login />,
    auth: authType.PUBLIC,
  },
];
