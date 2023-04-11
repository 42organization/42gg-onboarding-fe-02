import { loginResultType } from '../types';

export const login = async (username, password) => {
  const loginRes = await fetch('login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  if (loginRes.ok) {
    return {
      res: loginResultType.SUCCESS,
      data: await loginRes.json(),
    };
  }
  return {
    res: loginResultType.FAIL,
    data: await loginRes.json(),
  };
};

export const logout = async () => {
  await fetch('logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
  });
};
