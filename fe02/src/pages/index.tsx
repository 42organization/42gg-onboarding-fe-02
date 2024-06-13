import Link from 'next/link';
import type { NextPageWithLayout } from './_app';
import type { ReactElement } from 'react';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/Home/Home.module.scss';

const HomePage: NextPageWithLayout = () => {
  return (
    <div className={styles.homeContainer}>
      <Link href='/party'>
        <div className='bg-sky-300'>Party</div>
      </Link>
      <Link href='/rank'>
        <div className='bg-sky-300'>Ranking</div>
      </Link>
      <Link href='/rank'>
        <div className='bg-sky-300'>Current Play</div>
      </Link>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
