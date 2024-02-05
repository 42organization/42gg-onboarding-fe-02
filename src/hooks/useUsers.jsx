import { useEffect, useState } from "react";
import { getUsersReq } from "../apis/user";

export function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersReq().then((data) => {
      setUsers(data);
    });
  }, []);

  return { users };
}
