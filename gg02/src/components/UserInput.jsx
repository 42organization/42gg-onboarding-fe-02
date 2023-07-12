import React, { useRef } from 'react';

function UserInput({ invalidInput }) {
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    <div className='Input'>
      {invalidInput && (
        <div className='error-message'>아이디와 비밀번호를 입력해주세요.</div>
      )}
      <input
        className='input-box'
        ref={nameInputRef}
        name='username'
        type='text'
        placeholder='username'
      />
      <input
        className='input-box'
        ref={passwordInputRef}
        name='password'
        type='password'
        placeholder='password'
      />
    </div>
  );
}

export default UserInput;
