import Image from 'next/image';
import styles from '@/styles/party/PartyRoomProfile.module.scss';

const RoomProfile = ({ member }) => {
  return (
    <div className={styles.profileBox}>
      {member.isHost && (
        <Image
          className={styles.hostImage}
          src='/image/crown.png'
          alt='host'
          width={20}
          height={20}
        />
      )}
      <div className={styles.profileImage}>
        <Image src={member.profile} alt='profile' width={50} height={50} />
      </div>
      <div className={styles.profileName}>{member.name}</div>
    </div>
  );
};

export default RoomProfile;
