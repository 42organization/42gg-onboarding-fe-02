import {
	useRecoilState,
  } from 'recoil';
import authAtom from './auth/authatom';
import users from './Users/data.json';

//이메일과 패스워드가 맞는지 확인한다. 맞지않으면 error을 출력 맞다면 유저 정보를 리턴한다.
function SignIn( email, password ) {
	const [auth, setAuth] = useRecoilState(authAtom);

	const user = users.users.find(user => user.email === email && user.password === password);
	console(user);
	if (user) {
		setAuth(auth);//변경점
	} else {
		alert('아이디 또는 비밀번호가 잘못되었습니다.');
	}
}

export default SignIn;