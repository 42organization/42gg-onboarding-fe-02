import React from "react";
import{Navigate} from "react-router-dom";
//user를 물러와서 출력하게 구현하기
function Profile(user) {
	const { email, password, name } = user;

	const authFromLocalStorage = JSON.parse(localStorage.getItem('auth'));
	if (authFromLocalStorage !== 1 && authFromLocalStorage !== 2)
	{
		alert('권한이 없습니다.')
		return <Navigate to='/Home' />;
	}

	return (
		<>
			<h1>Profile</h1>
			<dt>Email</dt>
			<dd>{email}</dd>
			<dt>Password</dt>
			<dd>{password}</dd>
			<dt>Name</dt>
			<dd>{name}</dd>
		</>
	);
}

export default Profile;