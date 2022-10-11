import React, { useState } from "react";
import "./style.css";
import "../navigationbar/style.css";
import UserIcon from "../../images/user.png";
import { BsSearch } from "react-icons/bs";
import { BiUpload } from "react-icons/bi";
import headerImg from "../../images/Wallpaper-Engine-Steam-App.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbarActive, setNavbarActive] = useState(false);
  const changeBG = () => {
    if (window.scrollY >= 200) {
      setNavbarActive(true);
    } else setNavbarActive(false);
  };
  window.addEventListener("scroll", changeBG);
  return (
    <div>
      <nav className={`conten-nav-r ${navbarActive ? "navbar-active" : ""}`}>
        <div className="search-box">
          <div className="search">
            <i className="bi">
              <BsSearch />
            </i>
            <input type="text" placeholder="Search Music..." />
          </div>
        </div>
        <ul>
          <Link to="premium">
            <li className="nav-vip">vip</li>
          </Link>
          <li className="nav-upload">
            <i>
              <BiUpload />
            </i>
          </li>
          <li>
            <div className="user">
              <img src={UserIcon} alt="User" />
            </div>
          </li>
        </ul>
      </nav>
      <div className="header-img">
        <img src={headerImg} alt="bg-img" />
      </div>
    </div>
  );
}

export default Navbar;
