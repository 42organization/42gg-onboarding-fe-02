import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: {
    isLoggedIn: false,
    userRole: 'guest',
    effects_UNSTABLE: [persistAtom],
  },
});
