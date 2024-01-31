import React from 'react';
import styles from '../styles/sidebar.module.css';
import { ReactComponent as Admin } from '../assets/admin.svg';
import { ReactComponent as Checklist } from '../assets/checklist.svg';
import { ReactComponent as Home } from '../assets/home.svg';
import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authatoms';
import { useNavigate } from 'react-router-dom';

function sidebar() {
  const { userName } = useRecoilValue(authState);
  const navigate = useNavigate();

  function moveToLobby() {
    navigate('/Lobby');
  }
  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.title}>{userName}</div>
        <ul>
          <li onClick={moveToLobby}>
            <div>
              <Home />
              <span className={styles.te}>Lobby</span>
            </div>
          </li>
          <li>
            <div>
              <Checklist />
              <span className={styles.te}>Checklist</span>
            </div>
          </li>
          <li>
            <div>
              <Checklist />
              <span className={styles.te}>Checklist</span>
            </div>
          </li>
          <li>
            <div>
              <Admin />
              <span className={styles.te}>Admin</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default sidebar;
