import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { addUser } from "../services/http.service";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function UserRegistration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [type, setType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repasswordError, setRePasswordError] = useState("");
  const [typeError, setTypeError] = useState("");

  const userTypes = [
    { id: "Manager", value: "Manager" },
    { id: "Worker", value: "Worker" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const setUserType = (value) => {
    setIsOpen(false);
    setType(value);
  };

  const submitUserData = async (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      setUsernameError("Username is required");
    } else {
      setUsernameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }

    if (repassword.trim() === "") {
      setRePasswordError("Re-password is required");
    } else {
      setRePasswordError("");
    }

    if (type.trim() === "") {
      setTypeError("Type is required");
    } else {
      setTypeError("");
    }

    if (
      username !== "" &&
      email !== "" &&
      password !== "" &&
      password === repassword &&
      type !== ""
    ) {
      const data = {
        username: username,
        password: password,
        email: email,
        type: type,
      };
      const responce = await addUser(data);
      setEmail("");
      setUsername("");
      setPassword("");
      setRePassword("");
      setType("");

      setUsernameError("");
      setTypeError("");
      setEmailError("");
      setPasswordError("");
      setRePasswordError("");
    } else {
      setRePasswordError("Re-password is not match with Password");
    }
  };

  return (
    <div className="w-full md:w-1/2 text-white">
      <NotificationContainer />
      <div className="bg-jet  text-center px-1 md:px-4 py-2 m-auto rounded relative">
        <h2 className="text-2xl mb-5">User registrtion</h2>
        <form onSubmit={(e) => submitUserData(e)}>
          <div className="flex flex-col">
            <label className="m-1">Enter your Username</label>
            <input
              className="my-1 mx-auto px-2 w-4/5 py-1 rounded"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            {usernameError && (
              <span style={{ color: "red" }}>{usernameError}</span>
            )}
            <label className="m-1"></label>
          </div>
          <div className="flex flex-col">
            <label className="m-1">Enter your Email</label>
            <input
              className="my-1 mx-auto px-2 w-4/5 py-1 rounded"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {emailError && <span style={{ color: "red" }}>{emailError}</span>}
            <label className="m-1"></label>
          </div>
          <div className="flex flex-col">
            <label className="m-1">Enter your Password</label>
            <input
              className="my-1 mx-auto px-2 w-4/5 py-1 rounded"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {passwordError && (
              <span style={{ color: "red" }}>{passwordError}</span>
            )}
            <label className="m-1"></label>
          </div>
          <div className="flex flex-col">
            <label className="m-1">Enter your Re Password</label>
            <input
              className="my-1 mx-auto px-2 w-4/5 py-1 rounded"
              type="password"
              value={repassword}
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
            />
            {repasswordError && (
              <span style={{ color: "red" }}>{repasswordError}</span>
            )}
            <label className="m-1"></label>
          </div>
          <div className="flex flex-col">
            <label className="m-1">Select your Type</label>

            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleDropdown}>
                {type
                  ? userTypes.find((item) => item.value === type).id
                  : "Select User Type"}
              </div>
              <div className={`dropdown-body ${isOpen && "open"}`}>
                {userTypes.map((item) => (
                  <div
                    className="dropdown-item"
                    onClick={(e) => {
                      setUserType(e.target.id);
                    }}
                    id={item.value}
                  >
                    <span
                      className={`dropdown-item-dot ${
                        item.value === type && "selected"
                      }`}
                    ></span>
                    {item.value}
                  </div>
                ))}
              </div>
            </div>
            {typeError && <span style={{ color: "red" }}>{typeError}</span>}
            <label className="m-1"></label>
          </div>

          <button
            className="text-white bg-smoky-black m-3 px-4 py-1 rounded"
            type="submit"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserRegistration;
