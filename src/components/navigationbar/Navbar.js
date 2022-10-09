import React from "react";
import "./style.css";
import "../navigationbar/style.css";
import UserIcon from "../../images/user.png";
import {BsSearch} from "react-icons/bs"; 
import {BiUpload} from "react-icons/bi"; 

function Navbar() {
  return (
    <nav className="conten-nav-r">
      <div className="search-box">
        <div className="search">
          <i className="bi">
            <BsSearch/>
          </i>
          <input type="text" placeholder="Search Music..." />
        </div>
      </div>
      <ul>
        <li className="nav-vip">vip</li>
        <li className="nav-upload">
          <i>
            <BiUpload/>
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
