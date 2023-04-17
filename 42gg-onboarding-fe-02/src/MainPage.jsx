import React from 'react';
import { Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import NotFound from "./page/NotFound";
import Users from "./Users";
import LoginForm from './page/LoginForm';
import Profile from './page/Profile';
import LogoutButton from './page/LogoutButton';
import PrivateRoute from './auth/PrivateRoute';
import Sidebar from './Sidebar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';

//import { useRecoilState } from 'recoil';
/* import styled from 'styled-components';

const MainWrep = styled.div`
	display: flex;
	justify-content: space-evenly;
	`;
	
	
	const ContentWrapper = styled.div`
	wdith: calc(100% - 200px);
	margin-left: 200px;
` */
function Header() {
	return (
		<header>
		<nav>
			<ButtonGroup>
				<Link to="/">
					<Button>Bookjeok Bookjeok</Button>
				</Link>
				<Link to="/about">
					<Button>About</Button>
				</Link>
				<Link to="/users">
					<Button>Users</Button>
				</Link>
				<Link to="/Profile">
					<Button>Profile</Button>
				</Link>
				<Link to="/Login">
						<LogoutButton />
				</Link>
			</ButtonGroup>
		</nav>
		</header>
	);
}

function Body() {
	const users = () => {
		return <Users />;
	};
	return (
		<body>
			<div>
				<Routes>
					<Route path="/*" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/users/*" element={<PrivateRoute Component={users} />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/login" element={<LoginForm />}/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			</body>
	)
}


function MainPage() {
	const authFromLocalStorage = JSON.parse(localStorage.getItem('auth'));
	if (!authFromLocalStorage)
		return <Navigate to='/login' />;

	return (
		<div className='MainWrep'>
			<div className='ContentWrapper'>
				<Header />
				<hr />
				<Grid Container>
					<Grid item xs="8">
						<Sidebar></Sidebar>
					</Grid>
					<Grid item xs="4" container
  direction="column"
  justifyContent="center"
  alignItems="center">
						<Body></Body>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default MainPage;
