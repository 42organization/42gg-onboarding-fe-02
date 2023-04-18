import React from "react";
import data from "./data.json";
import {useNavigate, useLocation} from 'react-router-dom';

function UserDetail() {
	const navigate = useNavigate();
	const location= useLocation();

	const username=location.state;
	const userss = data.users;
	const user = userss.find((users) =>
		users.email == username
	);
	console.log(userss);
	return (
		<>
			<h2>User Detail</h2>
			<dt>email</dt>
			<dd>{user}</dd>
			<dt>name</dt>
			<dd>{user}</dd>
			<button onClick={() => navigate(-1)}>Back</button>
		</>
	);
}

export default UserDetail;