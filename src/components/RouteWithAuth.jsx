import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../utils/user';

export function RouteWithAuth({ auth }) {
  const user = useRecoilValue(userState);
  // TODO : url에 직접 접근하는 경우에 user가 없어진다.
  if (!user) {
    return <Navigate to='/login' />;
  }
  if (user.role < auth) {
    return <Navigate to='/' />;
  }
  return <Outlet />;
}
