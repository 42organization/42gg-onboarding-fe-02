import { authType } from '../types';

export const userMap = new Map([
  [
    'red',
    {
      password: 'qwe123!@#',
      auth: authType.ADMIN,
    },
  ],
  [
    'blue',
    {
      password: 'qwe123!@#',
      auth: authType.MANAGER,
    },
  ],
  [
    'green',
    {
      password: 'qwe123!@#',
      auth: authType.NORMAL,
    },
  ],
]);
