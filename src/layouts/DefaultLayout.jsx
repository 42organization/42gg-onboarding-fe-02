import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '../components/layouts';
import styles from '../styles/content.module.scss';

export function DefaultLayout() {
  return (
    <div className={styles.generalWrapper}>
      <Header />
      <Sidebar />
      <div className={styles.bodyWrapper}>
        <Outlet />
      </div>
    </div>
  );
}
