import type { ReactElement } from 'react';
import Layout from '@/components/Layout/Layout';
import { RoomInfo } from '@/components/party/partyRoom/PartyRoomInfo';
import { NextPageWithLayout } from '@/pages/_app';
import styles from '@/styles/party/PartyRoom.module.scss';

const PartyRoomPage: NextPageWithLayout = () => {
  return (
    <div className={styles.partyRoomContainer}>
      <div className={styles.partyRoomWrap}>
        <div className={styles.partyInfoUp}>
          <RoomInfo.PartyRoomTitle />
          <RoomInfo.PartyRoomHashTag />
        </div>
        <div className={styles.partyInfoDown}>
          <RoomInfo.PartyRoomExplain />
          <RoomInfo.PartyRoomMember />
        </div>
        {/* commentBox */}
        {/* floatingBtn */}
      </div>
    </div>
  );
};

PartyRoomPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PartyRoomPage;
