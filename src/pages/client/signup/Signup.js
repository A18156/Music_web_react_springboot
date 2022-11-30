import React, { useState } from "react";
import SlideBar from "../../../components/sliebar/SlideBar";
import "./style.css";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const saveDemo = (e) => {};
  return (
    <div>
      <SlideBar />
      <form className="f_signup_container">
        <div className="signup_title">
          <h1>sign up</h1>
        </div>
        <div>
          {/* full name */}
          <div className="f_signup_row">
            <label className="f_signup_text" htmlFor="username">
              full name
            </label>
            <input
              name="username"
              type="text"
              placeholder="enter your full name"
              onChange={(e) => setFullname(e.target.value)}
            />
            <p className="f_signup_validation"></p>
          </div>
          {/* birthday */}
          <div className="f_signup_row">
            <label className="f_signup_text" htmlFor="username">
              birthday
            </label>
            <input
              name="username"
              type="text"
              placeholder="enter your email"
              onChange={(e) => setBirthday(e.target.value)}
            />
            <p className="f_signup_validation"></p>
          </div>
          {/* gender */}
          <div className="f_signup_row">
            <label className="f_signup_text" htmlFor="username">
              gender
            </label>
            <div className="signup_gender">
              <input
                name="username"
                type="radio"
                value="1"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="username">male</label>
            </div>
            <div className="signup_gender">
              <input
                name="username"
                type="radio"
                value="0"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="username">female</label>
            </div>
          </div>
           {/* email */}
           <div className="f_signup_row">
            <label className="f_signup_text" htmlFor="username">
              birthday
            </label>
            <input
              name="username"
              type="text"
              placeholder="enter your email"
              onChange={(e) => setBirthday(e.target.value)}
            />
            <p className="f_signup_validation"></p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
