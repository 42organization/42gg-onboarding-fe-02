import React from "react";
//import {useEffect} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

function Users() {

	const authFromLocalStorage = JSON.parse(localStorage.getItem('auth'));
	if (authFromLocalStorage === "3")
	{
		alert("권한이 없습니다 user");
		return Navigate('/');
	}

	return (
		<Routes>
			<Route index element={<UserList />} />
			<Route path="user/:id" element={<UserDetail />} />
		</Routes>
	);
	}

export default Users;