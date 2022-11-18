import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { addUser } from "../services/http.service";
import 'react-notifications/lib/notifications.css'; 
import {NotificationContainer, NotificationManager} from 'react-notifications';

function UserRegistration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [type, setType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [validation, setValidation] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
    type: "",
  });

  const checkValidation = () => {
    console.log('running');
    let errors = validation;

    //first Name validation
    if (username.trim() === '') {
      errors.username = "Username is required";
    } else if (username.trim() !== '') {
      errors.username = "";
    }
    //type validation
    if (type.trim() === '') {
      errors.type = "User type is required";
    } else if (type.trim() !== ''){
      errors.type = "";
    }

    // email validation

    // if (email.trim() === '') {
    //   errors.email = "Email is required";
    // } else if (email.trim() !== ''){
    //   errors.email = "";
    // } 
     
    if (email.trim() === '') {
      errors.email = "Email is required";
    }  
    else {
      errors.email = "";
    } 
 
    // const password = password;
    if (password.trim() === '') {
      errors.password = "Password is required";
    } else if (password.trim().length < 5) {
      errors.password = "Password must be longer than 5 characters";
    } else if (password.trim().length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    if (repassword.trim() === '') {
      errors.repassword = "Password confirmation is required";
    } else if (repassword.trim() !== password.trim()) {
      errors.repassword = "Password does not match confirmation password";
    } else if (repassword.trim() === password.trim()) {
      errors.repassword = "";
    }
    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [username, email, password, repassword, type]);

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

  const submitUserData = (e) => {
    e.preventDefault(); 
    checkValidation();  
    if (validation.username !== "" || validation.email !== "" || validation.password !== "" || validation.repassword !== "" || validation.type !== "") {
      // console.log("Invalid"); 
      NotificationManager.error('Invalid inputs', 'Warning!', 2000); 
      return;
    } else {
      const data = {
        username: username,
        password: password,
        email: email,
        type: type,
      };
      addUser(data);
      setEmail("")
      setUsername("")
      setPassword("")
      setRePassword("")
      NotificationManager.success('', 'Sucess!', 2000); 
    }
  };

  return (
    <div className="w-full md:w-1/2 text-white">
    <NotificationContainer/>
      <div className="bg-jet  text-center px-1 md:px-4 py-2 m-auto rounded relative">
        <h2 className="text-2xl mb-5">User registrtion</h2>
        <form onSubmit={(e) => submitUserData(e)}>
          <div className="flex flex-col">
            <label className="m-1">Enter your Username</label>
            <input
              className="my-1 mx-auto px-2 w-4/5 py-1 rounded"
              type="text"
              value={username}
              onChange={(e) => {setUsername(e.target.value); checkValidation()}}
              onBlur={checkValidation}
            />
            {validation.username && <span style={{ color: 'red' }}>{validation.username}</span>}
            <label className="m-1"></label>
          </div>
          <div className="flex flex-col">
            <label className="m-1">Enter your Email</label>
            <input
              className="my-1 mx-auto px-2 w-4/5 py-1 rounded"
              type="text"
              value={email}
              onChange={(e) => {setEmail(e.target.value); checkValidation()}}
              onBlur={checkValidation}
            />
            {validation.email && <span style={{ color: 'red' }}>{validation.email}</span>}
            <label className="m-1"></label>
          </div>
          <div className="flex flex-col">
            <label className="m-1">Enter your Password</label>
            <input
              className="my-1 mx-auto px-2 w-4/5 py-1 rounded"
              type="password"
              value={password}
              onChange={(e) => {setPassword(e.target.value); checkValidation()}}
              onBlur={checkValidation}
            />
            {validation.password && <span style={{ color: 'red' }}>{validation.password}</span>}
            <label className="m-1"></label>
          </div>
          <div className="flex flex-col">
            <label className="m-1">Enter your Re Password</label>
            <input
              className="my-1 mx-auto px-2 w-4/5 py-1 rounded"
              type="password"
              value={repassword}
              onChange={(e) =>  {setRePassword(e.target.value); checkValidation()}}
              onBlur={checkValidation}
            />
            {validation.repassword && <span style={{ color: 'red' }}>{validation.repassword}</span>}
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
                    onClick={(e) => {setUserType(e.target.id); checkValidation()}}
                    onBlur={checkValidation}
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
                {validation.type && <span style={{ color: 'red' }}>{validation.type}</span>}
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