import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from './user';

export function useUser() {
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch('/user');
        if (!res.ok) throw new Error('Failed to load user');
        const user = await res.json();
        setUser(user);
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    if (user) return;
    loadUser();
  }, [user]);

  console.log('//', user, loading, error, '//');
  return { user, loading, error };
}
