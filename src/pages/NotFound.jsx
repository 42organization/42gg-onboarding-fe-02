import styles from '../styles/notFound.module.scss';
import { useRoute } from '../utils/useRoute';

export function NotFound() {
  const { router } = useRoute();

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <button
        className={styles.button}
        onClick={() => {
          router('/');
        }}
      >
        Home
      </button>
    </div>
  );
}
