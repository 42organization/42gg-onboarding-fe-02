import React from 'react';
import { Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import LoginForm from './LoginForm';
import Profile from './Profile';
import LogoutButton from './LogoutButton';
import { useRecoilValue } from 'recoil';
import PrivateRoute from '../auth/PrivateRoute';
import Sidebar from '../Sidebar';
//import { useRecoilState } from 'recoil';
import authAtoms from '../auth/authatom';
/* import styled from 'styled-components';

const MainWrep = styled.div`
	display: flex;
	justify-content: space-evenly;
	`;
	
	
	const ContentWrapper = styled.div`
	wdith: calc(100% - 200px);
	margin-left: 200px;
` */

function MainPage() {
	const auth = useRecoilValue(authAtoms)
	//const [auth,  = useRecoilState(authAtoms)

	console.log("Nimal:"+auth);
	const authFromLocalStorage = JSON.parse(localStorage.getItem('auth'));
	if (!authFromLocalStorage)
		return <Navigate to='/login' />;
	
	const profile = () => {
		return <Profile user={auth} />;
	};

	return (
		<div className='MainWrep'>
		<div className='ContentWrapper'>
		<Sidebar/>
		<nav>
				<Link to="/">
					<button>Bookjeok Bookjeok</button>
				</Link>
				<Link to="/about">
					<button>About</button>
				</Link>
				<Link to="/Profile">
					<button>Profile</button>
				</Link>
				<Link to="/Login">
						<LogoutButton />
				</Link>
		</nav>
			<hr />
			<div>

				<Routes>
					<Route path="/*" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/profile" element={<PrivateRoute Component={profile} />} />
					<Route path="/login" element={<LoginForm />}/>
					<Route path="*" element={NotFound()} />
				</Routes>
			</div>
		</div>
		</div>
	);
}

export default MainPage;
