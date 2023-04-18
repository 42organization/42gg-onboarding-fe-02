import { Home, Login, PageA, PageB, Manager, Admin, NotFound } from '../pages';
import { roleType } from '../types';

export const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    auth: roleType.NORMAL,
  },
  {
    path: '/login',
    name: 'Login',
    element: <Login />,
    auth: roleType.PUBLIC,
  },
  {
    path: '/page-a',
    name: 'PageA',
    element: <PageA />,
    auth: roleType.NORMAL,
  },
  {
    path: '/page-b',
    name: 'PageB',
    element: <PageB />,
    auth: roleType.NORMAL,
  },
  {
    path: '/manager',
    name: 'Manager',
    element: <Manager />,
    auth: roleType.MANAGER,
  },
  {
    path: '/admin',
    name: 'Admin',
    element: <Admin />,
    auth: roleType.ADMIN,
  },
  {
    path: '*',
    name: 'NotFound',
    element: <NotFound />,
    auth: roleType.PUBLIC,
  },
];
