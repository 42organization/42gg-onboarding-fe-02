import { useRecoilState } from "recoil";
import { userState } from "../atoms/auth";
import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { useUsers } from "../hooks/useUsers";

export function Layout() {
  const [user] = useRecoilState(userState);
  const { users } = useUsers();

  return (
    <div className={styles.siteCon}>
      <div className={styles.viewBox}>
        <header className={styles.siteHeader}>
          <Link to={"/"}>
            <h1>42GG</h1>
          </Link>
        </header>
        {user ? (
          <>
            <nav className={styles.siteNav}>
              {(user?.role === "manager" || user?.role === "admin") && (
                <Link to={"/manager"}>
                  <button>manager</button>
                </Link>
              )}
              {user?.role === "admin" && (
                <Link to={"/admin"}>
                  <button>admin</button>
                </Link>
              )}
            </nav>
            <div className={styles.siteBodyCon}>
              <aside>
                <ul className={styles.userListCon}>
                  {users.map((u) => (
                    <li key={u.id}>{u.username}</li>
                  ))}
                </ul>
              </aside>
              <main className={styles.siteMainCon}>
                <Outlet />
              </main>
            </div>
          </>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}
