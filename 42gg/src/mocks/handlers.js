import { HttpResponse, http } from 'msw';

const users = [
  { role: 'admin', id: 'admin', password: 'admin' },
  { role: 'manager', id: 'man', password: 'man' },
  { role: 'normal', id: 'norm', password: 'norm' },
];

export const handlers = [
  http.post('/login-id', async ({ request }) => {
    const body = await request.json();

    const user = users.find(
      (v) => v.id === body.id && v.password === body.password
    );

    if (user !== undefined)
      return HttpResponse.json({
        id: user.id,
        role: user.role,
        page: user.page,
      });
    return new HttpResponse('fake', { status: 502 });
  }),
];
