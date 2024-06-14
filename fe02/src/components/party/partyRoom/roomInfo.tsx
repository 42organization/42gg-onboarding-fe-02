import Image from 'next/image';
import styles from '@/styles/party/PartyRoomInfo.module.scss';

const PartyRoomTitle = () => {
  return (
    <div className={styles.roomTitleContainer}>
      <button className={styles.roomShare}>
        <Image src='/image/share.png' alt='share' width={20} height={20} />
      </button>
      <div className={styles.roomTitleWrap}>MMMMMMMMMM</div>
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
      <div className={styles.detailedTextBox}>
        여기는 상세글 100자 이내 여기는 상세글 100자 이내 여기는 상세글 100자
        이내 여기는 상세글 100자 이내 여기는 상세글 100자 이내 여기는 상세글
        100자 이내 여기는 상세글 100자 이내 여기는 상세글 100자 이내 여기는
        상세글 100자 이내 여기는 상세글 100자 이내 여기는 상세글 100자 이내
        여기는 상세글 100자 이내 여기는 상세글 100자 이내 여기는 상세글 100자
        이내 여기는 상세글 100자 이내 여기는 상세글 100자 이내 여기는 상세글
        100자 이내 여기는 상세글 100자 이내 여기는 상세글 100자 이내
      </div>
      <div className={styles.deadlineBox}>
        <div>마감일</div>
        <div>2024.1.1 - 3:49</div>
      </div>
    </div>
  );
};

export const RoomInfo = { PartyRoomTitle, PartyRoomHashTag, PartyRoomExplain };
