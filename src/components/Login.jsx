import { useLoginForm } from "../hooks/useLoginForm";
import styles from "./Login.module.scss";

export function Login() {
  const {
    email,
    password,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  } = useLoginForm();

  return (
    <div className={styles.loginCon}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <label htmlFor="EmailLoginInput">아이디</label>
          <input
            type="email"
            id="EmailLoginInput"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="passwordInput">비밀번호</label>
          <input
            type="password"
            name=""
            id="passwordInput"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={styles.submitBtnBox}>
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}
