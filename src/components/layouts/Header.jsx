import styles from '../../styles/header.module.scss';
export function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.title}>Routing Practice</div>
      <button className={styles.button}>Logout</button>
    </header>
  );
}
