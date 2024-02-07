import axios from 'axios';
import React from 'react';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../../atom';

export default Login;

function Login() {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  console.log(user);
  if (user.role !== '') navigate('/' + user.role);

  function handleSubmit(e) {
    e.preventDefault();
    let id = e.target[0].value;
    let password = e.target[1].value;
    // Todo: fetch 사용할 것
    axios
      .post('/login-id', { id, password })
      .then(({ data }) => {
        setUser({ id: data.id, role: data.role });
        console.log('submit: ', user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <h1>ID</h1>
        <input type='text' placeholder='ID' />
        <h1>Password</h1>
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
