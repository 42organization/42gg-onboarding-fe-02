import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import '../styles.scss';
import loginState from '../loginAtom';

function HomePage() {
  const isLoggedin = useRecoilValue(loginState);
  const navigate = useNavigate();

  if (!isLoggedin) {
    navigate('/');
    console.log('HomePage - ', isLoggedin);
    return null;
  }
  const user = localStorage.getItem('user');
  const ID = JSON.parse(user).id;

  return (
    <div className='main'>
      <h1>WELCOME</h1>
      {ID}
    </div>
  );
}

export default HomePage;
