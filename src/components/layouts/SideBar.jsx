import { Link } from 'react-router-dom';
import { sidebarContent } from '../../commons/sidebarContent';
import { useRecoilValue } from 'recoil';
import { userState } from '../../utils/user';
import { useRoute } from '../../utils/useRoute';
import styles from '../../styles/sidebar.module.scss';

export function Sidebar() {
  const user = useRecoilValue(userState);
  const { currentPath } = useRoute();
  if (!user) {
    return <></>;
  }
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.ulWrapper}>
        {sidebarContent
          .filter((content) => content.auth <= user.role)
          .map((route) => (
            <li key={route.name}>
              <Link
                className={
                  route.path === currentPath ? styles.currentLink : styles.link
                }
                to={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
