import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserRegistration from "./Pages/UserRegistration";
import { useState } from "react";
import Protected from "./services/Protected";
import Navbar from "./component/Navbar";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  return (
    <div className="App flex flex-col h-screen justify-center items-center">
      <BrowserRouter>
        <Navbar setisLoggedIn={setisLoggedIn} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Login setisLoggedIn={setisLoggedIn} />}
          />
          <Route
            path="home"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Home />
              </Protected>
            }
          />
          <Route
            path="add-user"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <UserRegistration />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
