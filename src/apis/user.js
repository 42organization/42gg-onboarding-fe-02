export async function getUsersReq() {
  return fetch("http://localhost:5173/api/users", {
    method: "GET",
  }).then((res) => {
    if (!res.ok) throw new Error(`Failed to get users. Status: ${res.status}`);

    return res.json();
  });
}
