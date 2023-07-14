import React from 'react';
import './AdminPage.css';

function AdminPage() {
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
