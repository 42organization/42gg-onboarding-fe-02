import React, { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import loginState from '../loginAtom';
import '../styles.scss';

function LoginPage() {
  const isLoggedin = useRecoilValue(loginState);
  const navigate = useNavigate();
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (isLoggedin) {
      alert('이미 로그인 상태입니다!');
      navigate('/', { replace: true }); // 왜 안됨
    }
  }, [isLoggedin]);

  return (
    <div className='main'>
      <h1>HELLO WORLD </h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
