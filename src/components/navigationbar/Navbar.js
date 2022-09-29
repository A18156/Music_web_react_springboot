import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "boxicons";
import "../navigationbar/style.css";
import UserIcon from "../../images/user.png";
import Logo from "../../images/logo.png";

function Navbar() {
  return (
    <nav className="conten-nav-r">
      <div className="search-box">
        <div className="search">
          <i className="bi">
            <box-icon name="search-alt"></box-icon>
          </i>
          <input type="text" placeholder="Search Music..." />
        </div>
      </div>
      <ul>
        <li className="nav-vip">vip</li>
        <li className="nav-upload">
          <i>
            <box-icon name="upload"></box-icon>
          </i>
        </li>
        <li>
          <div className="user">
            <img src={UserIcon} alt="User" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
