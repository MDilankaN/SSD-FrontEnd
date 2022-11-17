import React, { useEffect, useState } from "react";
import { loginUser } from "../services/http.service";
import { Form, useNavigate } from 'react-router-dom';
import 'react-notifications/lib/notifications.css'; 
import {NotificationContainer, NotificationManager} from 'react-notifications';

function Login({setisLoggedIn}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 


  const [validation, setValidation] = useState({ 
    username: "",
    password: "", 
  });

  
  const checkValidation = () => {
    console.log('running');
    let errors = validation; 

    if (username.trim() === '') {
      errors.username = "Username is required";
    } else {
      errors.username = "";
    }  

    if (password.trim() === '') {
      errors.password = "Password is required";
    } else if (password.trim() !== ''){
      errors.password = "";
    } 

    setValidation(errors);
  };
  
  useEffect(() => {
    checkValidation();
  }, [username, password]);


  const submitdata = async (e) => {
    e.preventDefault();
    if (validation.username !== "" || validation.password !== "") {
      // console.log("Invalid"); 
      NotificationManager.error('Invalid inputs', 'Warning!', 2000); 
      return;
    } else {
      const data ={
        "username": username,
        "password": password
      }
      const res = await loginUser(data);
      if (res.accessToken) {
        setisLoggedIn(true); 
        NotificationManager.success('', 'Sucess!', 2000); 
        return navigate('home');

      } else {
        console.log(res.data);
      }
    }
  };

  return (
    <div className="w-full md:w-1/2 text-white">
      <NotificationContainer/>
      <div className="bg-jet text-white text-center px-1 md:px-4 py-2 m-auto rounded md:w-1/2">
        <h2 className="text-2xl mb-5">Login</h2>
        <div> 
          <form onSubmit={(e) => submitdata(e)}>
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

            <button
              className="text-white bg-smoky-black m-3 px-4 py-1 rounded"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>


    
  );
}

export default Login;
