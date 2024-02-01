import { HttpResponse, http } from 'msw';

const users = [
  { role: 'admin', id: 'admin', password: 'admin' },
  { role: 'manager', id: 'man', password: 'man' },
  { role: 'normal', id: 'norm', password: 'norm' },
];

export const handlers = [
  // http.post('http://localhost:3000/login', (req, res, ctx) => {
  //   const { id, password } = req.body; // Access request body

  //   console.log('id:' + id);

  //   const user = users.find(
  //     (user) => user.id === id && user.password === password
  //   );

  //   if (user) {
  //     return res(
  //       ctx.status(200),
  //       ctx.json({
  //         role: user.role,
  //       })
  //     );
  //   } else {
  //     return res(
  //       ctx.status(401),
  //       ctx.json({
  //         error: 'Invalid login credentials',
  //       })
  //     );
  //   }
  // }),
  http.post('/id', (req, res, ctx) => {
    const test = req.body;
    console.log(test);
    return res(
      ctx.status(200),
      ctx.json({
        role: 'admin',
      })
    );
  }),
  http.get('/id', (x) => {
    console.log('hello');
    // Respond with "401 Unauthorized" to "GET /user" requests.
    return new HttpResponse(null, { status: 402 });
  }),
];

// export const handlers = [
//   http.post(`http://localhost:3000/login`, ({ request }) => {
//     const info = request.formData();
//     console.log('hadler:' + info);
//     return HttpResponse.ok({
//       body: {
//         role: users.find((user) => user.id === info.get('id'))?.role,
//       },
//     });
//   }),
// ];
