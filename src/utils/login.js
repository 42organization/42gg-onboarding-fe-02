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
    return loginResultType.SUCCESS;
  }
  return loginResultType.FAILURE;
};
