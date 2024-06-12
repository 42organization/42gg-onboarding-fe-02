import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Nav.module.scss';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link href='/404.html'>
        <i className='fa-solid fa-bars'></i>
      </Link>
      <Link href='/404.html'>
        <h1 className={styles.logo}>42GG</h1>
      </Link>
      <Link href='/404.html'>
        <Image
          src='/asset/myProfile.jpeg'
          width='24'
          height='24'
          className='my-profile'
          alt='myprofile-picture'
        ></Image>
      </Link>
    </div>
  );
}
