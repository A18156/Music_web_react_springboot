import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DemoService from "../../services/DemoService";
import "./style.css";
function Createform() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [pwd, setpwd] = useState("");

  const history = useNavigate();
  const [selectValue,setSelectValue] = useState('choose your option');
  const saveDemo = (e) => {
    e.preventDefault();
    const demo = { id, name, username, pwd };
    DemoService.createDemo(demo)
      .then((respone) => {
        console.log(respone.data);
        history("../premium");
      })
      .catch((error) => console.log(error));
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="f-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="f-content">
        <h2>create form</h2>
        <div className="f-table">
          <div className="t-row">
            <label htmlFor="id">ID: </label>
            <input
              {...register("id", {
                required: "* This input is required.",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "* This input is number only.",
                },
                minLength: {
                  value: 1,
                  message: "* This input must have at least 1 number",
                },
              })}
              type="text"
              placeholder="id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <i className="error-mgs">{errors.id?.message}</i>
          <div className="t-row">
            <label htmlFor="fullname">Name: </label>
            <input
              {...register("fullname", {
                required: "* This input is required.",
                pattern: {
                  value: /^(([a-zA-z]{2,})(\s{1}([a-zA-Z]{2,}))+)$/,
                  message: "* This input is only character.",
                },
                maxLength: {
                  value: 50,
                  message: "* This input range 50",
                },
              })}
              type="text"
              placeholder="name"
              name="fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <i className="error-mgs">{errors.fullname?.message}</i>
          <div className="t-row">
            <label htmlFor="username">Username: </label>
            <input
              {...register("username", {
                required: "* This input is required.",
                pattern: {
                  value: /^([a-zA-z]{1})([a-zA-z0-9]{3,19})$/,
                  message: "* This input is number only.",
                },
                maxLength: {
                  value: 20,
                  message: "* This input range 20",
                },
              })}
              type="text"
              placeholder="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <i className="error-mgs">{errors.username?.message}</i>
          <div className="t-row">
            <label htmlFor="pwd">Password: </label>
            <input
             {...register("pwd", {
              required: "* This input is required.",
              pattern: {
                value: /^([a-zA-z]{1})([a-zA-z0-9]{3,19})$/,
                message: "* This input is number onl.",
              },
              maxLength: {
                value: 20,
                message: "* This input range 20",
              },
            })}
              type="password"
              placeholder="password"
              name="pwd"
              value={pwd}
              onChange={(e) => setpwd(e.target.value)}
            />
          </div>
          <div className="t-row">
              <select name="select your option" value={selectValue} onChange={(e) => setSelectValue(e.target.value) }>
                <option value="0">select your option</option>
                <option value="1">hola</option>
                <option value="2">halo</option>
              </select>
          </div>
          <i className="error-mgs">{errors.pwd?.message}</i>            
        </div>
        <div className="f-button">
          <input type="submit" value={"save"} />
        </div>
      </div>
    </form>
  );
}

export default Createform;
