import React, { useState } from "react";
import "./style.css";
import "boxicons";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

function SlideBar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <div className={`sidebar ${open  ? "open" : ""}`}>
      <div className="brand">
        <div className="brand-box">
          <Link className="brand-img" to="">
            <img src={Logo} alt="MusicHub" />
            <h1 className="hide-text">MusicHub</h1>
          </Link>
        </div>
      </div>
      <div className="left-side">
        <div className="menu-bar">
          <ul className="menu-links">
            <li>
              <Link to="">
                <i className="icon">
                  <box-icon size="md" name="music"></box-icon>
                </i>
                <span className="hide-text">New</span>
              </Link>
            </li>
            <li>
              <Link to="trend">
                <i className="icon">
                  <box-icon size="md" type="logo" name="deezer"></box-icon>
                </i>
                <span className="hide-text">trend</span>
              </Link>
            </li>
            <li>
              <Link to="account">
                <i className="icon">
                  <box-icon size="md" name="user-pin"></box-icon>
                </i>
                <span className="hide-text">Account</span>
              </Link>
            </li>
            <li>
              <Link to="collection">
                <i className="icon">
                  <box-icon size="md" name="heart"></box-icon>
                </i>
                <span className="hide-text">collection</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottom-sidebar">
          <i className="toggle" onClick={toggle}>
            <box-icon size="md" type="solid" name="chevron-right"></box-icon>
          </i>
          <div className="menu-board"></div>
        </div>
      </div>
    </div>
  );
}

export default SlideBar;
