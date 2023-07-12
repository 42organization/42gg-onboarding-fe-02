import React, { useRef } from 'react';

function UserInput() {
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    <div className="Input">
      <input
        ref={nameInputRef}
        name="username"
        type="text"
        placeholder="username"
      />
      <input
        ref={passwordInputRef}
        name="password"
        type="password"
        placeholder="password"
      />
    </div>
  );
}

export default UserInput;
