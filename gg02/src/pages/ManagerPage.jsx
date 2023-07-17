import React from 'react';
import { useRecoilValue } from 'recoil';
import userState from '../userAtom';
import ErrorPage from './ErrorPage';
import '../styles.scss';

function ManagerPage() {
  const authority = useRecoilValue(userState);

  if (authority !== 'manager' && authority !== 'admin') {
    return <ErrorPage message='운영자만 접근할 수 있습니다!' />;
  }

  return (
    <div className='main'>
      <h1>MANAGER</h1>
    </div>
  );
}

export default ManagerPage;
