import React from "react";
import {useNavigate } from "react-router-dom";
import {useSetRecoilState} from "recoil";
import authAtom from "../auth/authatom"

function LogoutButton() {
	const navigate = useNavigate();
	const setAuth = useSetRecoilState(authAtom);

	const handleClick = () => {
		setAuth(false);
		localStorage.setItem('auth', JSON.stringify(false));
		navigate('/login');
	};
	return <button onClick={handleClick}>Logout</button>;
}

export default LogoutButton;