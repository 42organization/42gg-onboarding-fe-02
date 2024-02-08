import { useResetRecoilState } from 'recoil';
import { userState } from '../../atom';

export default function LogoutButton() {
  const userReset = useResetRecoilState(userState);

  return (
    <button className='LogoutButton' onClick={userReset}>
      logout
    </button>
  );
}
