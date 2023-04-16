import React from "react";
import users from "./data.json";
import { Link } from "react-router-dom";

function UserList() {
	const user = users.users;

	//console.log(userr);
	return (
		<>
			<h1>Users</h1>
			<h2>User List</h2>
			<ul>
				{user.map(( users ) => (
					<li key={users.authority}>
						<Link to={`users/${users.authority}`}>{users.email}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default UserList;