import React from 'react';
import './ManagerPage.css';

function ManagerPage() {
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
