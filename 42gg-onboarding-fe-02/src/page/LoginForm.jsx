import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
//import SignIn from '../Auth';
import { useRecoilState } from "recoil";
import authAtom from "../auth/authatom";
import users from '../Users/data.json';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
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
			<Box
					sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					}}>
			<h2>Bookjeok Bookjeok</h2>
			<form onSubmit={handleLogin}>
			
				<div>
					<label>아이디:</label>
					<TextField label="Email" 
								required
								fullWidth
								name="email"
								autoComplete="email"
								autoFocus
								margin="normal"
								></TextField>
					<input
						type="text" 
						value={email} 
						onChange={(event) => setEmail(event.target.value)} 
						placeholder="아이디를 입력해주세요"
					/>
				</div>
				<div>
					<label>비밀번호:</label>
					<TextField label="password" 
								tyle="password"
								required
								fullWidth
								name="password"
								type="password"
								id="password"
								autoComplete="current-password"
								margin="normal"></TextField>
					<input type="password" 
						value={password} 
						onChange={(event) => setPassword(event.target.value)} 
						placeholder="패스워드를 입력해주세요"
					/>
				</div>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>
				<Button type="submit"
						fullWidth variant="contained"
						sx={{mt: 3}}
						>Sign in</Button>
			</form>
				</Box>
		</div>
	);
}

export default LoginForm