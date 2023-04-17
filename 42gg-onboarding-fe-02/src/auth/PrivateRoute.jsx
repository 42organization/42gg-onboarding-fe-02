import {useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { useRecoilValue } from "recoil";
import authAtom from "./authatom";
//import MainPage from './../MainPage';

function PrivateRoute({ Component}) {
	const [component, setComponent ] = useState(null);
	const auth = useRecoilValue(authAtom);
	const Navigate = useNavigate();

	useEffect(() => {
		if (auth === "2") {
			alert('접근 권한이 없습니다. :P');
			Navigate('/');
		} else {
			setComponent(Component());
		}
	}, []);
	return component;
}

export default PrivateRoute;