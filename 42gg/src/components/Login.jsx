function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    const id = e.target[0].value;
    const pw = e.target[1].value;

    if (pw.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    console.log(id, pw);
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

export default Login;
