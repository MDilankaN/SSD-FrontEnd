import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserRegistration from "./Pages/UserRegistration";

function App() {
  return (
    <div className="App flex h-screen justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="add-user" element={<UserRegistration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
