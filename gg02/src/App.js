import React from 'react';
import './css/App.css';
import './css/styles.scss';
import UserInput from './components/UserInput';
import HandleButton from './components/HandleButton';

function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD </h1>
      <UserInput />
      <HandleButton />
    </div>
  );
}

export default App;
