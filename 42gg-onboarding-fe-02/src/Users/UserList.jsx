import React from "react";
import data from "./data.json";
import { Link } from "react-router-dom";

function UserList() {
	const user = data.users;

	//console.log(userr);
	//console.log(user);
	return (
		<>
			<h1>Users</h1>
			<h2>User List</h2>
			<ul>
				{user.map(( users ) => (
					<li key={users.email}>
						<Link to="user/${users.email}" >{users.email}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default UserList;