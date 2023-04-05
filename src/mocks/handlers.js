import { rest } from 'msw';
import { userMap } from '../commons';

export const handlers = [
  rest.post('/login', async (req, res, ctx) => {
    const { username, password } = await req.json();
    const user = userMap.get(username);
    if (!user || user.password !== password) {
      return res(ctx.status(401));
    }
    // sessionStorage.setItem('is-authenticated', 'true');
    return res(ctx.status(200));
  }),
];
