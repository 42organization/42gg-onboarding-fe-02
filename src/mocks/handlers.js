import { HttpResponse, http } from "msw";

const users = [
  {
    id: 1,
    email: "user1@user1.com",
    username: "유저1",
    password: "qwer1234",
  },
];

export const handlers = [
  http.post("/api/login", async ({ request }) => {
    const { email, password } = await request.json();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    return user
      ? HttpResponse.json(
          { id: user.id, email: user.email, username: user.username },
          { status: 200 }
        )
      : HttpResponse.json(
          { success: false, message: "Invalid email or password" },
          { status: 401 }
        );
  }),
];
