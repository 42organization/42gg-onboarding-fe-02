import { HttpResponse, http } from "msw";

const users = [
  {
    id: 1,
    email: "user1@user1.com",
    username: "유저1",
    password: "qwer",
    role: "normal",
  },
  {
    id: 2,
    email: "user2@user2.com",
    username: "유저2",
    password: "qwer",
    role: "manager",
  },
  {
    id: 3,
    email: "user3@user3.com",
    username: "유저3",
    password: "qwer",
    role: "admin",
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
          {
            id: user.id,
            email: user.email,
            username: user.username,
            role: user.role,
          },
          { status: 200 }
        )
      : HttpResponse.json(
          { success: false, message: "Invalid email or password" },
          { status: 401 }
        );
  }),
  http.get("/api/users", async () => {
    return HttpResponse.json(users, { status: 200 });
  }),
];
