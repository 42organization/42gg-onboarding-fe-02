import React from 'react';
import { Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import NotFound from "./page/NotFound";
import Users from "./Users";
import LoginForm from './page/LoginForm';
import Profile from './page/Profile';
import PrivateRoute from './auth/PrivateRoute';
import Sidebar from './Sidebar';
import Button from '@mui/material/Button';
import styles from './scss/navbar.module.scss';

function Header() {
	return (
		<header>
		<nav className={styles.nav_item}>
				<Link to="/" className={styles.Home}>
					<Button style={{color: '#d0936d'}}>Bookjeok Bookjeok</Button>
				</Link>
				<Link to="/about">
					<Button style={{color: '#d0936d'}}>About</Button>
				</Link>
				<Link to="/users">
					<Button style={{color: '#d0936d'}}>Users</Button>
				</Link>
				<Link to="/Profile">
					<Button style={{color: '#d0936d'}}>Profile</Button>
				</Link>
		</nav>
		</header>
	);
}

function Body() {
	const users = () => {
		return <Users />;
	};
	return (
			<Routes className={styles.bodypage}>
				<Route path="/*" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/users/*" element={<PrivateRoute Component={users} />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<LoginForm />}/>
				<Route path="*" element={<NotFound />} />
			</Routes>
	)
}


function MainPage() {
	const authFromLocalStorage = JSON.parse(localStorage.getItem('auth'));
	if (!authFromLocalStorage)
		return <Navigate to='/login' />;

	return (
		<div className='MainWrep'>
			<Sidebar />
			<div className={styles.ContentWrep}>
				<Header />
				<hr />
				<Body />
			</div>
		</div>
	);
}

export default MainPage;
