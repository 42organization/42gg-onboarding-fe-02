import Image from 'next/image';
import styles from '@/styles/Layout/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <button>
        <Image src='/image/more.png' alt='more' width={30} height={30} />
      </button>
      <div className={styles.headerLogo}>
        <a href='/'>42GG</a>
      </div>
      <button className={styles.headerMyProfileBtn}>
        <Image
          src='/image/default-profile.png'
          alt='profile'
          width={35}
          height={35}
        ></Image>
      </button>
    </div>
  );
};

export default Header;
