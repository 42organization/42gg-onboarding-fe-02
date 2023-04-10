import { useState, useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userState } from './user';

export function useUser() {
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('/user');
        if (!res.ok) throw new Error('Failed to load user');
        const user = await res.json();
        setUser(user);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }
    if (user) return;
    fetchUser();
  }, [user]);
  return { user, loading, error, resetUser };
}
