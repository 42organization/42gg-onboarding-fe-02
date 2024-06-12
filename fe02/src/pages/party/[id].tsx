import partyStyle from '@/styles/partyroom.module.scss';

type typeProps = {
  id: string;
};

//props id 들어오냐?
export default function PartyRoom(props: typeProps) {
  return (
    <div className={partyStyle.Partyroom}>
      <h1>Partyroom</h1>
      <p>{props.id}</p>
      <div className={partyStyle.container}>
        <div className={partyStyle.info}></div>
      </div>
    </div>
  );
}
