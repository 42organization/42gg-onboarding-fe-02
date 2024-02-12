export async function LoginRequest({ email, password }) {
  return fetch("http://localhost:5173/api/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    if (!res.ok) throw new Error(`Failed to login. Status: ${res.status}`);

    return res.json();
  });
}
