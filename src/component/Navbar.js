import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ setisLoggedIn, isLoggedIn }) {
  const [naviagteBtn, setnaviagteBtn] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home") {
      setnaviagteBtn("Dashboard");
    } else if (location.pathname === "/add-user") {
      setnaviagteBtn("Messages");
    }
  }, []);

  const navigateToPage = () => {
    if (location.pathname === "/home") {
      setnaviagteBtn("Messages");
      return navigate("/add-user");
    } else if (location.pathname === "/add-user") {
      setnaviagteBtn("Dashboard");
      return navigate("/home");
    }
  };

  const logout = () => {
    setisLoggedIn(false);
    localStorage.clear();
  };

  return (
    <div className="w-full fixed top-0 h-12 bg-desert-sand flex justify-between p-1 rounded text-center">
      <button
        className="border-solid border-2 border-white p-1 rounded"
        onClick={() => navigate("/home")}
      >
        {isLoggedIn ? "Welcome "+localStorage.getItem("user") : "SSD"}
      </button>
      {isLoggedIn && localStorage.getItem("type") === 'admin' && (
        <button
          className="border-solid border-2 border-white p-1 rounded"
          onClick={() => navigateToPage()}
        >
          {naviagteBtn}
        </button>
      )}
      <button
        className="border-solid border-2 border-white p-1 rounded"
        onClick={() => logout()}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Navbar;
