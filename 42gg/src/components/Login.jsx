import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

export default Login;

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    let id = e.target[0].value;
    let password = e.target[1].value;
    axios.post('/id', { test: 'test' }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div>
      <h1>ID</h1>
      <h1>Password</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='ID' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
