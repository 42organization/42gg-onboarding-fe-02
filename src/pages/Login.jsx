import { login } from '../utils/login';

export function Login() {
  async function loginSubmitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    const response = await login(username, password);
    return response;
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
