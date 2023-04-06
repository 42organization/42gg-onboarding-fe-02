import { login } from '../utils/login';
import { loginResultType } from '../types';
import { useRoute } from '../utils/useRoute';
import { useSetRecoilState } from 'recoil';
import { userState } from '../utils/user';

export function Login() {
  const { router } = useRoute();
  const setUser = useSetRecoilState(userState);

  async function loginSubmitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    const loginRes = await login(username, password);
    if (loginRes.res === loginResultType.SUCCESS) {
      setUser(loginRes.data);
      router('/');
      return;
    }
    // TODO : 로그인 실패시 토스트 메시지 띄우기
    return;
  }

  return (
    <div>
      <form onSubmit={loginSubmitHandler}>
        <label>
          username
          <input type='text' name='username' />
        </label>
        <label>
          password
          <input type='password' name='password' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
