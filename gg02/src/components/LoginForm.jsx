import React from 'react';
import UserInput from './UserInput';
import HandleButton from './HandleButton';

function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const enteredUser = event.target[0].value;
    const enteredPassword = event.target[1].value;
    console.log(`user: ${enteredUser}, pw: ${enteredPassword}`);
    if (!enteredUser.trim().length) {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (!enteredPassword.length) {
      alert('비밀번호를 입력해주세요.');
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <UserInput />
        <HandleButton />
      </form>
    </div>
  );
}

export default LoginForm;
