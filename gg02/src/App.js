import React from 'react';
import './css/App.css';
import './css/styles.scss';

function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD </h1>

      <div className="Input">
        <input name="username" type="text" placeholder='username' />
        <input name="password" type="password" placeholder='password'/>
      </div>
      <div>
        <button type="button">SIGN IN</button>
      </div>
    </div>
  );
}

export default App;
