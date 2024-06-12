import partyStyle from '@/styles/partyroom.module.scss';

//props id 들어오냐?
export default function PartyRoom(props) {
  return (
    <div className={partyStyle.PartyRoom}>
      <h1>Partyroom</h1>
      <div className={partyStyle.container}>
        <div className={partyStyle.info}></div>
      </div>
    </div>
  );
}
