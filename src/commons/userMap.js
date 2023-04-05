import { authType } from '../types';

export const userMap = new Map([
  [
    'red',
    {
      password: 'qwe!@#123',
      auth: authType.ADMIN,
    },
  ],
  [
    'blue',
    {
      password: 'qwe!@#123',
      auth: authType.MANAGER,
    },
  ],
  [
    'green',
    {
      password: 'qwe!@#123',
      auth: authType.NORMAL,
    },
  ],
]);
