import { useResetRecoilState } from 'recoil';
import { userState } from '../../atom';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();
  const userReset = useResetRecoilState(userState);

  function logoutHandler() {
    userReset();
    navigate('/');
  }
  return <button onClick={logoutHandler}>logoutButton</button>;
}
