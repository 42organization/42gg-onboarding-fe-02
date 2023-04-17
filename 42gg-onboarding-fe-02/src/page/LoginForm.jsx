import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
//import SignIn from '../Auth';
import { useRecoilState } from "recoil";
import authAtom from "../auth/authatom";
import users from '../Users/data.json';

function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const Navigate = useNavigate();
	const [auth, setAuth] = useRecoilState(authAtom);

	console.log("loginform:"+auth);
	const handleLogin = (event) => {
		event.preventDefault();
	
		try {
			const user = users.users.find(user => user.email === email && user.password === password);
			if (user) {
				setAuth(user.authority);
				localStorage.setItem('auth', JSON.stringify(user.authority));
				localStorage.setItem('email', JSON.stringify(user.email));
				localStorage.setItem('password', JSON.stringify(user.password));
				localStorage.setItem('name', JSON.stringify(user.name));
				//if (user.authority === "1")
				Navigate('/');
			}
			else
				throw null;
		} catch (error) {
			alert('로그인에 실패했습니다.');
			setEmail('');
			setPassword('');
		}
	};
	
	return (
		<div>
			<h2>로그인 페이지</h2>
			<form onSubmit={handleLogin}>
				<div>
					<label>아이디:</label>
					<input 
						type="text" 
						value={email} 
						onChange={(event) => setEmail(event.target.value)} 
						placeholder="아이디를 입력해주세요"	
					/>
				</div>
				<div>
					<label>비밀번호:</label>
					<input type="password" 
						value={password} 
						onChange={(event) => setPassword(event.target.value)} 
						placeholder="패스워드를 입력해주세요"
					/>
				</div>
				<button type="submit">로그인</button>
			</form>
		</div>
	);
}

export default LoginForm