import React from 'react';
import Navbar from '../component/navbar';
import Sidebar from '../component/sidebar';
import styles from '../styles/default.module.css';

function Lobby() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={styles.backgroundcolor}>HHHHIIIII</div>
    </div>
  );
}

export default Lobby;
