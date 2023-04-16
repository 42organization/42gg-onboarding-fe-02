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
import './scss/App.module.scss';
/* import styled from 'styled-components';

const AppWrep = styled.div`
	display: flex;
`; */

function App() {
	const [auth, setAuth] = useRecoilState(authAtom);
	//const Navigate = Navigate();

	useEffect(() => {
		const authFromLocalStorage = JSON.parse(localStorage.getItem('auth'));
		if (authFromLocalStorage)
		{
			setAuth(authFromLocalStorage);
			console.log(auth);
			//Navigate('/')
		}
	}, [setAuth]);

	return (
		<div className="AppWrep">
		<Router>
			<Routes>
				<Route path="/login" element={<LoginForm />} />
				<Route path="/*" element={<MainPage />} />
			</Routes>
		</Router>
		</div>
	);
}

export default App;
