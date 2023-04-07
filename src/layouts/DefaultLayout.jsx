import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '../components/layouts';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
}
