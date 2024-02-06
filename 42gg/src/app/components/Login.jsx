import axios from 'axios';
import React from 'react';
import '../css/Login.css';

export default Login;

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    let id = e.target[0].value;
    let password = e.target[1].value;
    // Todo: fetch 사용할 것
    axios
      .post('/id', { id, password })
      .then(({ data }) => {
        if ('normal' === data.role) console.log('normal user');
        else if ('manager' === data.role) console.log('good manager');
        else if ('admin' === data.role) console.log('good admin');
        else throw new Error('아이디 또는 비밀번호가 틀렸습니다.');
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
