import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submitdata = () => {
    if (username == "" || password == "") {
      console.log("No values");

      return;
    } else {
      console.log(username);
      console.log(password);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <form onSubmit={submitdata}>
          <div>
            <label>Enter your Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label>Enter your Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
