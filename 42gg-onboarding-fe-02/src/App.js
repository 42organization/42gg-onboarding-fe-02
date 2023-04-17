//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MainPage from './MainPage';
//import PrivateRoute from './auth/PrivateRoute';
import LoginForm from './page/LoginForm';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import authAtom from './auth/authatom';
import RoutingPage from './page/RoutingPage';
import styles from './scss/App.module.scss';
import NomalPage from './page/NomalPage';
/* import styled from 'styled-components';

const AppWrep = styled.div`
	display: flex;
`; */

function App() {
	const [auth, setAuth] = useRecoilState(authAtom);

	useEffect(() => {
		const authFromLocalStorage = JSON.parse(localStorage.getItem('auth'));
		if (authFromLocalStorage)
		{
			setAuth(authFromLocalStorage);
			console.log(auth);
		}
	}, [setAuth]);

	const Mainpage = () => {
		const authFromLocalStorage = JSON.parse(localStorage.getItem('auth'));
		if (authFromLocalStorage === "1" || authFromLocalStorage === "2")
			return <MainPage />;
		else 
			return <NomalPage />;
	}

	return (
		<div className={styles.AppWrep}>
		<Router>
			<Routes>
				<Route path="/login" element={<LoginForm />} />
				<Route path="/*" element={<RoutingPage Component={Mainpage} />} />
			</Routes>
		</Router>
		</div>
	);
}

export default App;
