import { rest } from 'msw';
import users from './users.json';

export const handlers = [
  rest.get('/api/users/:username', async (req, res, ctx) => {
    const { username } = req.params;
    const userData = users.find((u) => u.username === username);
    if (userData === undefined) return res(ctx.status(404));
    await sleep(100);
    return res(ctx.status(200), ctx.json(userData));
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
