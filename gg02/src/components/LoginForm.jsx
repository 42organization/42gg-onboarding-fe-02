import React, { useState } from 'react';
import UserInput from './UserInput';
import HandleButton from './HandleButton';
import '../css/LoginForm.css';

function LoginForm() {
  const [validInput, setValidInput] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target);
    const enteredUser = event.target[0].value;
    const enteredPassword = event.target[1].value;
    setInputTouched(true);
    // console.log(`user: ${enteredUser}, pw: ${enteredPassword}`);
    if (!enteredUser.trim().length || !enteredPassword.length) {
      setValidInput(false);
      return;
    }
    setValidInput(true);
  }

  const invalidInput = !validInput && inputTouched;

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <UserInput invalidInput={invalidInput} />
        <HandleButton />
      </form>
    </div>
  );
}

export default LoginForm;
