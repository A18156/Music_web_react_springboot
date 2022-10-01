import React, { useState } from "react";
import "./style.css";
import "boxicons";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

function SlideBar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <div className={open === true ? "sidebar close" : "sidebar"}>
      <div className="left-side">
        <div className="brand">
          <div className="brand-box">
            <Link className="brand-img" to="">
              <img src={Logo} alt="MusicHub" />
              <h1 className="hide-text">MusicHub</h1>
            </Link>
          </div>
        </div>
        <div className="menu-bar">
          <ul className="menu-links">
            <li>
              <Link to="">
                <i className="icon">
                  <box-icon name="music"></box-icon>
                </i>{" "}
                <span className="hide-text">New</span>
              </Link>
            </li>
            <li>
              <Link to="trend">
                <i className="icon">
                  <box-icon type="logo" name="deezer"></box-icon>
                </i>{" "}
                <span className="hide-text">trend</span>
              </Link>
            </li>
            <li>
              <Link to="account">
                <i className="icon">
                  <box-icon name="user-pin"></box-icon>
                </i>{" "}
                <span className="hide-text">Account</span>
              </Link>
            </li>
            <li>
              <Link to="collection">
                <i className="icon">
                  <box-icon name="heart"></box-icon>
                </i>{" "}
                <span className="hide-text">collection</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-sidebar">
        <Link to="new">
          <i className="toggle icon" onClick={toggle}>
            <box-icon type="solid" name="chevron-right"></box-icon>
          </i>
        </Link>
      </div>
    </div>
  );
}

export default SlideBar;
