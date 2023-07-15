import React from 'react';
import '../styles.scss';

function HomePage() {
  let ID = '';
  const user = localStorage.getItem('user');
  if (user) {
    ID = JSON.parse(user).id;
  }
  return (
    <div className='main'>
      <h1>WELCOME</h1>
      {ID}
    </div>
  );
}

export default HomePage;
