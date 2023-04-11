import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../utils/useUser';

export function RouteWithAuth({ auth }) {
  const { user, loading, error } = useUser();

  if (error) {
    // 로그인이 안된 것이므로 로그인 페이지로 이동
    return <Navigate to='/login' />;
  }
  if (loading) {
    // 로딩중이면 아무것도 안함
    return <></>;
  }
  if (user.role < auth) {
    // 권한이 없는 경우
    return <Navigate to='/' />;
  }
  return <Outlet />;
}
