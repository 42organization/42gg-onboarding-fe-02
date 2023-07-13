import React from 'react';
import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
  return (
    <div>
      <MainNavigation />
      <h1>ERROR</h1>
      <p>요청한 페이지를 찾을 수 없습니다</p>
    </div>
  );
}

export default ErrorPage;
