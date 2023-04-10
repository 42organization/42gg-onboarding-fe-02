import { login } from '../utils/login';
import { loginResultType } from '../types';
import { useRoute } from '../utils/useRoute';
import style from '../styles/login.module.scss';
import { FaUser, FaLock } from 'react-icons/fa';

export function Login() {
  const { router } = useRoute();

  async function loginSubmitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    const loginRes = await login(username, password);
    if (loginRes.res === loginResultType.SUCCESS) {
      router('/');
      return;
    }
    // TODO : 로그인 실패시 토스트 메시지 띄우기
    return;
  }

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Login</h1>
      <form onSubmit={loginSubmitHandler} className={style.formWrapper}>
        <div className={style.inputWrapper}>
          <FaUser />
          <input type='text' name='username' placeholder='username' />
        </div>
        <div className={style.inputWrapper}>
          <FaLock />
          <input type='password' name='password' placeholder='password' />
        </div>
        <button type='submit'>Enter</button>
      </form>
    </div>
  );
}
