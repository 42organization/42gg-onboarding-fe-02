import React from 'react';
import { Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import LoginForm from './LoginForm';
import Profile from './Profile';
import Sidebar from '../Sidebar';
import Button from '@mui/material/Button';
import styles from '../scss/navbar.module.scss';

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
				<Link to="/Profile">
					<Button style={{color: '#d0936d'}}>Profile</Button>
				</Link>
		</nav>
		</header>
	);
}

function Body() {
	return (
			<Routes className={styles.bodypage}>
				<Route path="/*" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<LoginForm />}/>
				<Route path="*" element={<NotFound />} />
			</Routes>
	)
}


function NormalPage() {
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

export default NormalPage;


