import usersData from "./../Users/data.json";

function authenticateUser(id, password) {
	// 유저 정보를 불러온다.
	const users = usersData.users;

	// 입력받은 id와 password가 일치하는 유저를 찾는다.
	const authenticatedUser = users.find(user => user.id === id && user.password === password);

	// 유저 인증에 성공하면, 해당 유저 객체를 반환한다.
	if (authenticatedUser) {
		return authenticatedUser;
	}

	// 유저 인증에 실패하면, null을 반환한다.
	return null;
}

export default authenticateUser;