import React from 'react';
import './HomePage.css';

function HomePage() {
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
