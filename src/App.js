import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigationbar/Navbar";
import SlideBar from "./components/sliebar/SlideBar";

function App() {
  return (
    <div className="container">
      <SlideBar></SlideBar>
      <div className="right">
        <Navbar></Navbar>
        <div className="content-r">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
