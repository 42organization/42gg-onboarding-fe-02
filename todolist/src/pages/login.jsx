import React, { useEffect } from 'react';
import styles from '../styles/login.module.css';
import Loginform from '../component/loginform';
import { useSetRecoilState } from 'recoil';
import { authState } from '../atoms/authatoms';

function login() {
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUsers'));

    if (loggedInUser) {
      setAuthState({
        isLoggedIn: true,
        userRole: loggedInUser.role,
      });
    }
  }, []);

  return (
    <>
      <div className={styles.background}>
        <div className={`${styles.logincontainer}`}>
          <div>
            <h2 className={styles.logintext}>My TodoList</h2>
          </div>
          <div
            className={`${styles.inputcontainer} ${styles['sm:mx-auto']} ${styles['sm:w-full']} ${styles['sm:max-w-sm']}`}
          >
            <Loginform />
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
