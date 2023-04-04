import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/layouts';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
