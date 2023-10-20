import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const roleState = atom<string>({
  key: 'roleState',
  default: 'guest',
  effects_UNSTABLE: [persistAtom],
});
