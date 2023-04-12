import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "my-session-storage",
    storage: sessionStorage,
    secretKey: "secret",
    encrypt: true,
});

export const isNormal = atom({
    key: "isNormal",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const isManager = atom({
    key: "isManager",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const isAdmin = atom({
    key: "isAdmin",
    default: false,
    effects_UNSTABLE: [persistAtom],
});