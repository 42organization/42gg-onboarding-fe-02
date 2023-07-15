import React from 'react';
import { useRecoilValue } from 'recoil';
import userState from '../userAtom';
import ErrorPage from './ErrorPage';
import '../styles.scss';

function AdminPage() {
  const authority = useRecoilValue(userState);

  if (authority !== 'admin') {
    return <ErrorPage message='관리자만 접근할 수 있습니다!' />;
  }

  return (
    <div className='main'>
      <h1>ADMIN</h1>
    </div>
  );
}

export default AdminPage;
