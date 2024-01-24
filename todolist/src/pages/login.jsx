import React from 'react';
import styles from './login.module.css';

function login() {
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
            <form action='#' method='POST'>
              <div>
                <label htmlFor='email' className={`${styles.emailcontainer}`}>
                  Email address
                </label>
                <div className={styles.mt_2}>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    placeholder='Email Adress'
                    className={`${styles.input_1} ${styles['sm:mx-auto']} ${styles['sm:leading-6']}`}
                  />
                </div>
              </div>

              <div>
                <div className={styles.passwordlabelcontainer}>
                  <label htmlFor='password' className={styles.passwordlabel}>
                    Password
                  </label>
                </div>
                <div className={styles.mt_2}>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    placeholder='PassWord'
                    className={`${styles.input_1} ${styles['sm:mx-auto']} ${styles['sm:leading-6']}`}
                  />
                </div>
              </div>
              <div className={styles.mt_2}>
                <button className={styles.btn}> Sign in </button>
                <button className={styles.btn2}>
                  <img
                    className={styles.img}
                    src='https://profile.intra.42.fr/assets/42_logo_black-684989d43d629b3c0ff6fd7e1157ee04db9bb7a73fba8ec4e01543d650a1c607.png'
                    alt='이미지 버튼'
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
