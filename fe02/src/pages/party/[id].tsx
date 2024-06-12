// import Nav from '@/components/Nav';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Nav from '../Nav';
import partyStyle from '@/styles/partyroom.module.scss';

const inter = Inter({ subsets: ['latin'] });

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
