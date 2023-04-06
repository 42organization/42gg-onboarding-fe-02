import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../utils/user';

export function RouteWithAuth({ role }) {
  const user = useRecoilValue(userState);
  if (!user) {
    return <Navigate to='/login' />;
  }
  if (user.role < role) {
    return <Navigate to='/' />;
  }
  return <Outlet />;
}
