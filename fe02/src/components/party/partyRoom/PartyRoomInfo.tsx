import Image from 'next/image';
import styles from '@/styles/party/PartyRoomInfo.module.scss';
import RoomProfile from './PartyRoomProfile';

const PartyRoomTitle = () => {
  return (
    <div className={styles.roomTitleContainer}>
      <button className={styles.roomShare}>
        <Image src='/image/share.png' alt='share' width={20} height={20} />
      </button>
      <div className={styles.roomTitleWrap}>Title</div>
    </div>
  );
};

const PartyRoomHashTag = () => {
  return (
    <div className={styles.roomHashTagContainer}>
      <div className={styles.hashTag}>#기타</div>
      <div className={styles.hashTag}>#2-5인</div>
    </div>
  );
};

const PartyRoomExplain = () => {
  return (
    <div className={styles.roomExplainContainer}>
      <div className={styles.detailedTextBox}>white space</div>
      <div className={styles.deadlineBox}>
        <div>마감일</div>
        <div>2024.1.1 - 3:49</div>
      </div>
    </div>
  );
};

const PartyRoomMember = () => {
  // mockdata
  const roomMember = [
    {
      id: '1',
      name: 'jeongrol',
      profile: '/image/default-profile.png',
      isHost: true,
    },
    {
      id: '2',
      name: 'jeongrol',
      profile: '/image/default-profile.png',
      isHost: false,
    },
    {
      id: '3',
      name: 'jeongrol',
      profile: '/image/default-profile.png',
      isHost: false,
    },
    {
      id: '4',
      name: 'jeongrol',
      profile: '/image/default-profile.png',
      isHost: false,
    },
    {
      id: '5',
      name: 'jeongrol',
      profile: '/image/default-profile.png',
      isHost: false,
    },
    {
      id: '6',
      name: 'jeongrol',
      profile: '/image/default-profile.png',
      isHost: false,
    },
    {
      id: '7',
      name: 'jeongrol',
      profile: '/image/default-profile.png',
      isHost: false,
    },
    {
      id: '8',
      name: 'jeongrol',
      profile: '/image/default-profile.png',
      isHost: false,
    },
  ];
  return (
    <div className={styles.roomMemberContainer}>
      <div className={styles.memberProfileContainer}>
        {roomMember.map((member) => (
          <RoomProfile key={member.id} member={member} />
        ))}
      </div>
      <div className={styles.memberCountBox}>인원 5 / 8</div>
    </div>
  );
};

export const RoomInfo = {
  PartyRoomTitle,
  PartyRoomHashTag,
  PartyRoomExplain,
  PartyRoomMember,
};
