import { selector } from "recoil";
import { userState } from "../atoms/auth";

export const loginState = selector({
  key: "loginState",
  get: ({ get }) => {
    const user = get(userState);

    return user ? true : false;
  },
});
