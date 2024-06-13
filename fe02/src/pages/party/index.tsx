import Link from 'next/link';
import type { NextPageWithLayout } from '../_app';
import type { ReactElement } from 'react';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/party/Party.module.scss';

const PartyPage: NextPageWithLayout = () => {
  return (
    <div className={styles.partyContainer}>
      <h1>Party Page</h1>
      <Link href='/party/1' className={styles.roomBtn}>
        <div>파티 방 1번</div>
      </Link>
      <Link href='/party/2' className={styles.roomBtn}>
        <div>파티 방 2번</div>
      </Link>
    </div>
  );
};

PartyPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PartyPage;
