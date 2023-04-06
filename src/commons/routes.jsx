import { Home, Login, PageA, PageB, Manager, Admin, NotFound } from '../pages';
import { roleType } from '../types';

export const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    role: roleType.NORMAL,
  },
  {
    path: '/login',
    name: 'Login',
    element: <Login />,
    role: roleType.PUBLIC,
  },
  {
    path: '/page-a',
    name: 'PageA',
    element: <PageA />,
    role: roleType.NORMAL,
  },
  {
    path: '/page-b',
    name: 'PageB',
    element: <PageB />,
    role: roleType.NORMAL,
  },
  {
    path: '/manager',
    name: 'Manager',
    element: <Manager />,
    role: roleType.MANAGER,
  },
  {
    path: '/admin',
    name: 'Admin',
    element: <Admin />,
    role: roleType.ADMIN,
  },
  {
    path: '*',
    name: 'NotFound',
    element: <NotFound />,
    role: roleType.PUBLIC,
  },
];
