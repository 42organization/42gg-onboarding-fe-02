import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from './UserInput';
import HandleButton from './HandleButton';
import './LoginForm.css';

function LoginForm() {
  const [validInput, setValidInput] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);
  const navigate = useNavigate();

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
    navigate('/main/home');
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
