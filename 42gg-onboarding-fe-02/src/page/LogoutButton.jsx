import React from "react";
import {useNavigate } from "react-router-dom";
import {useSetRecoilState} from "recoil";
import authAtom from "../auth/authatom"
import Button from '@mui/material/Button';

function LogoutButton() {
	const navigate = useNavigate();
	const setAuth = useSetRecoilState(authAtom);

	const handleClick = () => {
		setAuth(false);
		localStorage.setItem('auth', JSON.stringify(false));
		navigate('/login');
	};
	return <Button variant="outlined" onClick={handleClick}>Logout</Button>;
}

export default LogoutButton;