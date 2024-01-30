import { useRecoilState, useRecoilValue } from "recoil";
import { Login } from "../components/Login";
import styles from "./LoginPage.module.scss";
import { loginState } from "../selectors/authSelectors";
import { userState } from "../atoms/auth";

export function LoginPage() {
  const isLogined = useRecoilValue(loginState);
  const [, setUser] = useRecoilState(userState);

  return (
    <div className={styles.pageCon}>
      {isLogined ? (
        <div>
          로그인 됨
          <button
            onClick={() => {
              setUser(null);
            }}
          >
            {" "}
            로그아웃{" "}
          </button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
