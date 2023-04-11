import { Outlet } from 'react-router-dom';
import styles from '../styles/layout.module.scss';

export function PublicLayout() {
  return (
    <div className={styles.generalWrapper}>
      <div className={styles.publicWrapper}>
        <Outlet />
      </div>
    </div>
  );
}
