import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

function Users() {
	return (
		<Routes>
			<Route index element={<UserList />} />
			<Route path="" element={<UserList />} />
			<Route path="users/:id" element={<UserDetail />} />
	  </Routes>
	);
  }

export default Users;