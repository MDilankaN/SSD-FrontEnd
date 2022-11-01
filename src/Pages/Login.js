import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitdata = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      console.log("No values");

      return;
    } else {
      console.log(username);
      console.log(password);
    }
  };

  return (
    <div className="w-full  bg-jet text-white text-center px-1 md:px-4 py-2 m-auto rounded md:w-1/2">
      <h2 className="text-2xl mb-5">Login</h2>
      <div>
        <form onSubmit={(e) => submitdata(e)}>
          <div className="flex flex-col">
            <label className="m-1">Enter your Username</label>
            <input
              className="my-1 mx-auto px-2 w-4/5 py-1 rounded"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="m-1"></label>
          </div>

          <div className="flex flex-col">
            <label className="m-1">Enter your Password</label>
            <input
              className="my-1 mx-auto px-2 w-4/5 py-1 rounded"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="m-1"></label>
          </div>

          <button
            className="text-white bg-smoky-black m-3 px-4 py-1 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
