import { Login } from "../components/Login";
import styles from "./LoginPage.module.scss";

export function LoginPage() {

  return (
    <div className={styles.pageCon}>
      <Login />
    </div>
  );
}
