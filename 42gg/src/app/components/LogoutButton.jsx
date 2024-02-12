import { useResetRecoilState } from 'recoil';
import { pageState, userState } from '../../atom';

export default function LogoutButton() {
  const userReset = useResetRecoilState(userState);
  const pageReset = useResetRecoilState(pageState);
  return (
    <button
      className='LogoutButton'
      onClick={() => {
        userReset();
        pageReset();
      }}
    >
      logout
    </button>
  );
}
