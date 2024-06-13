import Image from 'next/image';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { server } from '@/mocks/server';
import partyStyle from '@/styles/partyroom.module.scss';

server.listen();

type typeProps = {
  id: string;
};

// type typeRoom = {
//   roomId: number;
//   title: string;
//   content: string;
//   categoryId: number;
//   currentPeople: number;
//   minPeople: number;
//   maxPeople: number;
//   status: enum;
//   dueDate: Date;
//   createDate: Date;
//   myNickname: string | null;
//   hostNickname: string;
//   roomUsers: [
//     {
//       userRoomId: number;
//       nickname: string;
//       intraId: string | null;
//       userImage: string | null;
//     },
//   ];
//   comments: [
//     {
//       commentId: number;
//       nickname: string;
//       intraId: string | null;
//       isExist: boolean;
//       content: string;
//       isHidden: boolean;
//       createDate: Date;
//     },
//   ];
// };

//props id 들어오냐?
export default function PartyRoom(props: typeProps) {
  const [room, setRoom] = useState(null);
  const room_id = 34;
  console.log(room);
  axios
    .get(`https://example.com/party/rooms/${room_id}`)
    .then((response: AxiosResponse) => {
      console.log(response);
      setRoom(response.data);
    })
    .catch((error: TypeError) => {
      console.log(error);
    });

  return (
    <div className={partyStyle.Partyroom}>
      <div className={partyStyle.info_container}>
        <div className={partyStyle.info}>
          <div className={partyStyle.title}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              className={partyStyle.share_icon}
            >
              <g clip-path='url(#clip0_10_72)'>
                <path
                  d='M2.75 9.25C3.99264 9.25 5 8.24264 5 7C5 5.75736 3.99264 4.75 2.75 4.75C1.50736 4.75 0.5 5.75736 0.5 7C0.5 8.24264 1.50736 9.25 2.75 9.25Z'
                  stroke='black'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M11.25 13.5C12.4926 13.5 13.5 12.4926 13.5 11.25C13.5 10.0074 12.4926 9 11.25 9C10.0074 9 9 10.0074 9 11.25C9 12.4926 10.0074 13.5 11.25 13.5Z'
                  stroke='black'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M11.25 5C12.4926 5 13.5 3.99264 13.5 2.75C13.5 1.50736 12.4926 0.5 11.25 0.5C10.0074 0.5 9 1.50736 9 2.75C9 3.99264 10.0074 5 11.25 5Z'
                  stroke='black'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M4.76001 6L9.24001 3.75'
                  stroke='black'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M4.76001 8L9.24001 10.25'
                  stroke='black'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_10_72'>
                  <rect width='14' height='14' fill='white' />
                </clipPath>
              </defs>
            </svg>
            <h1>Party-title</h1>
            {props.id ? <p>{props.id}</p> : null}
            <div className={partyStyle.tag_container}>
              <div className={`${partyStyle.tag} + bg-sky-400`}>
                <p>#기타</p>
              </div>
              <div className={`${partyStyle.tag} + bg-amber-400`}>
                <p>#2인</p>
              </div>
            </div>
          </div>
          <p className={partyStyle.info_explain}>
            {`우리 파티 서비스 한번 잡솨보실?\n츄라이.. 해줘...`}
          </p>
          <p className={partyStyle.info_timelimit}>
            {`마감일\n2024. 1. 1  -  3:49`}
          </p>
          <div className={partyStyle.profile_container}>
            <div className={partyStyle.profile}>
              <svg
                className={partyStyle.crown}
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='12'
                viewBox='0 0 15 12'
                fill='none'
              >
                <path
                  d='M14 3L11 6L7.5 1L4 6L1 3V9.5C1 9.8978 1.15804 10.2794 1.43934 10.5607C1.72064 10.842 2.10218 11 2.5 11H12.5C12.8978 11 13.2794 10.842 13.5607 10.5607C13.842 10.2794 14 9.8978 14 9.5V3Z'
                  stroke='black'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <Image
                width={61}
                height={61}
                alt='profilepic'
                src='data:image/jpeg;base64,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'
                className={partyStyle.profile_pic}
              ></Image>
              <p className={partyStyle.profile_nickname}>NAME</p>
            </div>
            <div className={partyStyle.profile}>
              <svg
                className={partyStyle.crown}
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='12'
                viewBox='0 0 15 12'
                fill='none'
              >
                <path
                  d='M14 3L11 6L7.5 1L4 6L1 3V9.5C1 9.8978 1.15804 10.2794 1.43934 10.5607C1.72064 10.842 2.10218 11 2.5 11H12.5C12.8978 11 13.2794 10.842 13.5607 10.5607C13.842 10.2794 14 9.8978 14 9.5V3Z'
                  stroke='black'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <Image
                width={61}
                height={61}
                alt='profilepic'
                src='data:image/jpeg;base64,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'
                className={partyStyle.profile_pic}
              ></Image>
              <p className={partyStyle.profile_nickname}>NAME</p>
            </div>
          </div>
          <p className={partyStyle.info_timelimit}>{`인원 5/8`}</p>
        </div>{' '}
        {/* 여기까지 파티인포, 이후 채팅*/}
      </div>
    </div>
  );
}
