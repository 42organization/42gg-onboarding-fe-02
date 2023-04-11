import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useUser } from '../utils/useUser';
import { useEffect } from 'react';

export function RouteWithAuth({ auth }) {
  const { user, loading, error } = useUser();

  useEffect(() => {
    if (error) {
      toast('로그인이 필요한 페이지입니다.', { type: 'error' });
    }
    if (user && user.role < auth) {
      toast('권한이 없는 페이지입니다.', { type: 'error' });
    }
  }, [error, user]);

  if (error) {
    return <Navigate to='/login' />;
  }
  if (loading) {
    return <></>;
  }
  if (user.role < auth) {
    return <Navigate to='/' />;
  }
  return <Outlet />;
}
