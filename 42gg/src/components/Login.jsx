import axios from 'axios';
import React from 'react';
import '../css/Login.css';
import { BrowserRouter } from 'react-router-dom';

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
        if (data.id !== id) {
          throw new Error('비정상 접근입니다.');
        }
        console.log('data', data.id);
      })
      .catch((err) => {
        console.log('아이디 패스워드를 확인하세요.');
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
