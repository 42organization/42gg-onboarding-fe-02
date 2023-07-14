import React from 'react';
import { useRecoilValue } from 'recoil';
import LoginForm from '../components/LoginForm';
import '../styles.scss';
import loginState from '../loginAtom';
import ErrorPage from './ErrorPage';

function LoginPage() {
  const isLoggedin = useRecoilValue(loginState);
  if (isLoggedin) {
    return <ErrorPage message='이미 로그인되어 있습니다!' />;
  }
  return (
    <div className='main'>
      <h1>HELLO WORLD </h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
