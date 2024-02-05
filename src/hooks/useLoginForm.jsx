import { useState } from "react";
import { LoginRequest } from "../apis/login";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/auth";

export function useLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setUser] = useRecoilState(userState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    return LoginRequest({ email, password })
      .then((user) => {
        setUser(user);
      })
      .catch((e) => console.log(e));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return {
    email,
    password,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  };
}
