import {useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { useRecoilValue } from "recoil";
import authAtom from "../auth/authatom";

function RoutingPage({ Component }) {
	const [component, setComponent ] = useState(null);
	const auth = useRecoilValue(authAtom);

	const Navigate = useNavigate();
	useEffect(() => {
		const authFromLocalStorage = JSON.parse(localStorage.getItem('auth'));
		if (!authFromLocalStorage) {
			alert('접근 권한이 없습니다.:R');
			Navigate('/login');
		} else {
			setComponent(Component(auth));
		}
	}, []);
	return component;
}

export default RoutingPage;