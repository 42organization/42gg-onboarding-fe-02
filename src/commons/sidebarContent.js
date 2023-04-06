import { routes } from './routes';

export const sidebarContent = routes.filter(
  (route) => route.name !== 'NotFound'
);
