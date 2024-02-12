import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: { id: '', role: '' },
});

export const pageState = atom({
  key: 'pageState',
  default: { page: 'todo' },
});
