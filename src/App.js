import './App.css';
import Login from './Pages/Login';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App flex h-screen justify-center items-center">
      <Login/>
      <Outlet />
    </div>
  );
}

export default App;
