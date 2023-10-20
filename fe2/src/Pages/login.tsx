import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { roleState } from '../Atoms/role';
import { useNavigate } from 'react-router-dom';

import './login.scss';
const url = 'http://localhost:4000/user'; // 대상 URL

const LoginPage: React.FC = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [inProcess, setInProcess] = useState(false);
  const [role, setRole] = useRecoilState(roleState);
  const navigate = useNavigate();
  let logined = false;

  useEffect(() => {
    const isLogined = localStorage.getItem('isLogin');
    if (isLogined === 'true' || logined === true) navigate('/main');
  });

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePwChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleLogin = () => {
    const checkid = id;
    const checkpw = pw;
    setInProcess(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setInProcess(false);
          throw new Error('Network response was not ok');
        }
        return response.json(); // JSON 형태로 응답 데이터를 파싱
      })
      .then((data) => {
        for (let i = 0; i < data.length; ++i) {
          if (data[i].id === checkid && data[i].password === checkpw) {
            localStorage.setItem('isLogin', 'true');
            setRole(data[i].role);
            logined = true;
            break;
          }
        }
        setInProcess(false);
        if (!logined) window.alert('해당 계정이 없습니다.');
        else navigate('/main');
      })
      .catch((error) => {
        setInProcess(false);
        console.error('Error:', error);
      });
  };

  return (
    <div className="login-page">
      <div className="message">This is Login Page</div>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={handleIdChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={pw}
        onChange={handlePwChange}
      />
      <button onClick={handleLogin} disabled={inProcess}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
