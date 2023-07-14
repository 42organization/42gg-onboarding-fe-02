import React from 'react';
// import MainNavigation from '../components/MainNavigation';
import '../styles.scss';

function ErrorPage({ message }) {
  return (
    <div>
      {/* <MainNavigation /> */}
      <div className='main'>
        <h1>ERROR</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ErrorPage;
