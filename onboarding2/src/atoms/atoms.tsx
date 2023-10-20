// userState.js
import axios from 'axios';
import { atom, useRecoilState } from 'recoil';

export const userState = atom<string | undefined>({
  key: 'userState',
  default: undefined,
});

export const findUserFromStorage = () => {
  const [userRole, setUserRole] = useRecoilState(userState);
  if (userRole === undefined) {
    const fetchData = async () => {
      try {
        const username = JSON.parse(localStorage.getItem('username') as string);
        const res = await axios({
          method: 'get',
          url: '/api/users/' + username,
        });
        if (res.status === 200) {
          console.log('GET /api/users/', username, ' => ', res.data);
          console.log('sucsses');
          setUserRole(res.data.userRole);
          return res.data.userRole;
        }
      } catch (error) {
        console.log(error);
        return undefined;
      }
    };

    fetchData();
  } else return userRole;
};
