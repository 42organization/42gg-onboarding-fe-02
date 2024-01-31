import axios from 'axios';

export default Login;

function Login() {
  async function handleSubmit(e) {
    e.preventDefault();
    let id = e.target[0].value;
    let password = e.target[1].value;

    await axios
      .post('http://localhost:3000/login', {
        id,
        password,
        role: null,
      })
      .then((res) => {
        console.log(res);
      });

    getUser();
  }
  async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>ID</h1>
      <h1>Password</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
