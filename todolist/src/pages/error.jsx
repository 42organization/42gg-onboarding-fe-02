import React from 'react';
import styles from '../styles/error.module.css';
import { useNavigate } from 'react-router-dom';

function errorpage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/');
  }

  return (
    <div className={styles.container}>
      <div>
        <span>This is not a valid page...</span>
      </div>

      <div>
        <button onClick={navigateHandler}>back</button>
      </div>
    </div>
  );
}

export default errorpage;
