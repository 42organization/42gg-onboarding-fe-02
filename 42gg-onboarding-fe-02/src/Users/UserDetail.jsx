import React from "react";
import data from "./data.json";
import {useNavigate} from 'react-router-dom';

function UserDetail(username) {
	const navigate = useNavigate();
	
	const user = data.find((users) => 
		users.email == username.email
	);
	return (
		<>
			<h2>User Detail</h2>
			<dt>email</dt>
			<dd>{user.email}</dd>
			<dt>name</dt>
			<dd>{user.name}</dd>
			<button onClick={() => navigate(-1)}>Back</button>
		</>
	);
}

export default UserDetail;