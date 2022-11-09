import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [naviagteBtn, setnaviagteBtn] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home") {
        setnaviagteBtn("Dashboard");
      } else if (location.pathname === "/add-user") {
        setnaviagteBtn("Messages");
      }
  }, [])
  

  const navigateToPage = () => {
    if (location.pathname === "/home") {
      setnaviagteBtn("Messages");
      return navigate("/add-user");
    } else if (location.pathname === "/add-user") {
      setnaviagteBtn("Dashboard");
      return navigate("/home");
    }
  };

  const logout = () => {};

  return (
    <div className="w-full h-12 bg-desert-sand flex justify-between p-1 rounded text-center">
      <button className="border-solid border-2 border-white p-1 rounded" onClick={() => navigate("/home")}>SSD</button>
      <button className="border-solid border-2 border-white p-1 rounded" onClick={() => navigateToPage()}>{naviagteBtn}</button>
      <button className="border-solid border-2 border-white p-1 rounded" onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Navbar;
