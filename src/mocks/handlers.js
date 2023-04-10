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
    // const token = `${username}-${v1()}`; // 토큰 생성
    // user.token = token; // userList에 토큰 저장
    /**
     * TODO: 토큰을 매 로그인시마다 새로 생성하고, 로그아웃시에 삭제할 수 있는 방법을 고민해보기
     * - 지금은 이미 저장되어 있는 하나의 토큰을 계속 사용하고 있음.
     * - js파일 내 객체에 저장해두면 refresh시에 초기화됨.
     * - 토큰을 localStorage에 저장하면 refresh시에도 유지되지만, 보안상의 문제가 있음.
     */
    return res(
      ctx.status(200),
      ctx.cookie('auth-token', user.token),
      ctx.json({ username: user.username, role: user.role })
    );
  }),

  rest.post('/logout', async (req, res, ctx) => {
    const token = req.cookies['auth-token']; // 요청 헤더의 auth-token
    const user = userList.find((user) => user.token === token); // userList에서 토큰에 해당하는 user를 가져옴
    if (!user) {
      return res(ctx.status(401), ctx.cookie('auth-token', ''));
    }
    return res(ctx.status(200), ctx.cookie('auth-token', ''));
  }),

  rest.get('/user', async (req, res, ctx) => {
    const token = req.cookies['auth-token']; // 요청 헤더의 auth-token
    const user = userList.find((user) => user.token === token); // userList에서 토큰에 해당하는 user를 가져옴
    if (!user) {
      return res(ctx.status(401));
    }
    return res(
      ctx.status(200),
      ctx.json({ username: user.username, role: user.role })
    );
  }),
];
