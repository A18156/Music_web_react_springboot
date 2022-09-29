import React from "react";
import "./style.css";
import "boxicons";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

function SlideBar() {
  return (
    <div className="sidebar">
      <div className="left-side">
        <div className="brand">
          <Link className="logo" to="">
            <img src={Logo} alt="MusicHub" />
            <h1>MusicHub</h1>
          </Link>
        </div>
        <div className="menu-bar">
          <ul className="menu-links">
            <li>
              <Link to="">
                <i className="icon">
                  <box-icon name="music"></box-icon>
                </i>{" "}
                New
              </Link>
            </li>
            <li>
              <Link to="trend">
                <i className="icon">
                  <box-icon type="logo" name="deezer"></box-icon>
                </i>{" "}
                trend
              </Link>
            </li>
            <li>
              <Link to="account">
                <i className="icon">
                  <box-icon name="user-pin"></box-icon>
                </i>{" "}
                Account
              </Link>
            </li>
            <li>
              <Link to="collection">
                <i className="icon">
                  <box-icon name="heart"></box-icon>
                </i>{" "}
                collection
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-sidebar">
        <Link to="new">
          <i className="icon">
            <box-icon name="log-out"></box-icon>
          </i>{" "}
          logout
        </Link>
      </div>
    </div>
  );
}

export default SlideBar;
