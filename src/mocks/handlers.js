import { rest } from 'msw';
import { v1 } from 'uuid';
import { userList } from '../commons';

export const handlers = [
  rest.post('/login', async (req, res, ctx) => {
    const { username, password } = await req.json(); // 요청 body의 username과 password
    const user = userList.find((user) => user.username === username); // userList에서 username에 해당하는 user를 가져옴
    if (!user || user.password !== password) {
      return res(ctx.status(401));
    }
    // TODO : 세션 스토리지에 로그인 여부 저장할지 고민해보기
    // sessionStorage.setItem('is-logined', 'true'); // 로그인 성공 시 sessionStorage 저장
    // TODO : 토큰의 필요성 여부에 대해서 고민해보기
    const token = `${username}-${v1()}`; // 토큰 생성
    user.token = token; // userList에 토큰 저장
    return res(
      ctx.status(200),
      ctx.cookie('auth-token', token),
      ctx.json({ username: user.username, role: user.role })
    );
  }),

  rest.post('/logout', async (req, res, ctx) => {
    // sessionStorage.removeItem('is-logined'); // 로그아웃 시 sessionStorage 삭제
    const token = req.cookies['auth-token']; // 요청 헤더의 auth-token
    const user = userList.find((user) => user.token === token); // userList에서 토큰에 해당하는 user를 가져옴
    if (!user) {
      return res(ctx.status(401));
    }
    user.token = ''; // userList에서 토큰 삭제
    return res(ctx.status(200));
  }),
];
