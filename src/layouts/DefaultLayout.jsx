import { Outlet } from 'react-router-dom';
import { Header, Footer, Sidebar } from '../components/layouts';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}
