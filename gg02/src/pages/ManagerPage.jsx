import React from 'react';
import { useRecoilValue } from 'recoil';
import '../styles.scss';
import loginState from '../loginAtom';
import userState from '../userAtom';
import ErrorPage from './ErrorPage';

function ManagerPage() {
  const isLoggedin = useRecoilValue(loginState);
  const isManager = useRecoilValue(userState);

  if (!isLoggedin || !isManager) {
    return <ErrorPage message='운영자만 접근할 수 있습니다!' />;
  }
  const user = localStorage.getItem('user');
  const ID = JSON.parse(user).id;

  return (
    <div className='main'>
      <h1>MANAGER</h1>
      {ID}
    </div>
  );
}

export default ManagerPage;
