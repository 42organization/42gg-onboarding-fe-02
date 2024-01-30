import styles from "./Login.module.scss";

export function Login() {

  return (
    <div className={styles.loginCon}>
      <header>
        <h2>로그인</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <label htmlFor="EmailLoginInput">아이디</label>
          <input type="email" id="EmailLoginInput" />
          <label htmlFor="passwordInput">비밀번호</label>
          <input type="password" name="" id="passwordInput" />
        </div>
        <div className={styles.submitBtnBox}>
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}

