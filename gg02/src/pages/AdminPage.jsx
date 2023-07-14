import React from 'react';
import { useRecoilValue } from 'recoil';
import '../styles.scss';
import loginState from '../loginAtom';
import userState from '../userAtom';
import ErrorPage from './ErrorPage';

function AdminPage() {
  const isLoggedin = useRecoilValue(loginState);
  const isAdmin = useRecoilValue(userState);

  if (!isLoggedin || !isAdmin) {
    return <ErrorPage message='관리자만 접근할 수 있습니다!' />;
  }
  const user = localStorage.getItem('user');
  const ID = JSON.parse(user).id;
  return (
    <div className='main'>
      <h1>ADMIN</h1>
      {ID}
    </div>
  );
}

export default AdminPage;
