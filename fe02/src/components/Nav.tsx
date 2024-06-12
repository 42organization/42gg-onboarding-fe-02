import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/navbar.module.scss';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link href='/404'>
        <i className='fa-solid fa-bars'></i>
      </Link>
      <Link href='/'>
        <h1 className={styles.logo}>42GG</h1>
      </Link>
      <Link href='/404'>
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
