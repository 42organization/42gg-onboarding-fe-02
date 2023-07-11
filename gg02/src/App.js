import React from 'react';
import './css/App.css';
import './css/styles.scss';

function App() {
  return (
    <div className='App'>
      <h1>HELLO WORLD </h1>

      <div className='Input'>
        <label htmlFor='ID'>
          ID <input name='username' type='text' />
        </label>
        <label htmlFor='PW'>
          PW <input name='password' type='password' />
        </label>
      </div>
      <div>
        <button type='button'>SIGN IN</button>
      </div>
    </div>
  );
}

export default App;
