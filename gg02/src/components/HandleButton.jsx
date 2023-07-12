import React from 'react';

function HandleButton() {
  function handleClick() {
    console.log('Click happened');
  }

  return (
    <div>
      <button type='submit' onClick={handleClick}>
        SIGN IN
      </button>
    </div>
  );
}

export default HandleButton;
