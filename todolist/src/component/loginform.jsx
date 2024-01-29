import React, { useState } from 'react';
import styles from '../styles/login.module.css';
// import

function loginform() {
  function inputhandler(event) {
    event.preventDefault();
    const idSet = event.target[0].value;
    const pwSet = event.target[1].value;
  }
  return (
    <>
      <form>
        <div>
          <label htmlFor='email' className={`${styles.emailcontainer}`}>
            Email address
          </label>
          <div className={styles.mt_2}>
            <input
              id='email'
              name='email'
              type='email'
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
              placeholder='PassWord'
              className={`${styles.input_1} ${styles['sm:mx-auto']} ${styles['sm:leading-6']}`}
            />
          </div>
        </div>
        <div className={styles.mt_2}>
          <button className={styles.btn}> Sign in </button>
          {/* <button className={styles.btn2}>
          <img
            className={styles.img}
            src='https://profile.intra.42.fr/assets/42_logo_black-684989d43d629b3c0ff6fd7e1157ee04db9bb7a73fba8ec4e01543d650a1c607.png'
            alt='이미지 버튼'
          />
        </button> */}
        </div>
      </form>
    </>
  );
}

export default loginform;
