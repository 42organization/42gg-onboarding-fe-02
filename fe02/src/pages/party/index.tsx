import styles from '@/styles/party/PartyRoom.module.scss';

export default function PartyRoom() {
  return (
    <>
      <div>
        <h1>Party page</h1>
      </div>

      <div className={styles.partyinfo}>
        {/*<div>*/}
        <div>
          <button></button>
          <span className='party-title'>
            <h1>Party Title</h1>
          </span>
          <div className='tag'></div>
        </div>
        <div>
          <span className='party-explain'></span>
          <span className='due'></span>
        </div>

        <div className='profile-container'>
          <div className='profile'>
            {/*<Image></Image>*/}
            <p className='profile-nickname'></p>
          </div>
          <span className='join-count'></span>
        </div>
      </div>

      <div className='commentbox-container'>comment box</div>
      <div className='floating-btn-contianer'>floating btn</div>
    </>
  );
}
