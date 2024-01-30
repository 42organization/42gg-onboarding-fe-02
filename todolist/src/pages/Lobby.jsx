import React from 'react';
import styles from '../styles/default.module.css';
import Navbar from '../component/navbar';

function Lobby() {
  return (
    <div className={styles.backgroundcolor}>
      <Navbar />
    </div>
  );
}

export default Lobby;
