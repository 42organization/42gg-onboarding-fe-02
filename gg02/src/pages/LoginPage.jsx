import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import loginState from '../loginAtom';
import '../styles.scss';

function LoginPage() {
  const isLoggedin = useRecoilValue(loginState);

  return (
    <div className='main'>
      {isLoggedin && <Navigate to='/main' replace />}
      <h1>HELLO WORLD </h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
