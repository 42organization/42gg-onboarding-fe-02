import React from "react";
import { Navigate, Route, Outlet } from "react-router-dom";
import {useRecoilValue} from "recoil";
import authAtom from "./auth/authatom";
//인증에 성공했다면 profile에 접근이 가능해진다.
/*          authenticated={authenticated}
						path="/profile"
						element={<Profile user={user}/>} */
function AuthRoute() {
	const auth = useRecoilValue(authAtom);

	return (
		<Route>
			{auth} ? <Outlet/>: <Navigate to="/login"/>
		</Route>
	);
}

export default AuthRoute;