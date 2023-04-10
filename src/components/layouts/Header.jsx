import styles from '../../styles/header.module.scss';
import { useRoute } from '../../utils/useRoute';
import { logout } from '../../utils/login';
import { useUser } from '../../utils/useUser';
export function Header() {
  const { router } = useRoute();
  const { resetUser } = useUser();

  function handleLogout() {
    logout();
    resetUser();
    router('/login');
  }

  return (
    <header className={styles.wrapper}>
      <div className={styles.title}>Routing Practice</div>
      <button onClick={handleLogout} className={styles.button}>
        Logout
      </button>
    </header>
  );
}
