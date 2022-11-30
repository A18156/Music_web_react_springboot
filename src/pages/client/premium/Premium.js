import React, { useEffect, useState } from "react";
import DemoService from "../../../services/DemoService";
import "./style.css";

function Premium() {
  const [demo, setDemo] = useState([]);
  useEffect(() => {
    DemoService.showAll()
      .then((respone) => {
        setDemo(respone.data);
        // console.log("data", respone.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);
  return (
    <div className="premium-container">
      <div className="premium-header">
        <h1>Unlimited music</h1>
        <p>
          High quality online music service, combined with exclusive facilities
          for VIP members
        </p>
        <div className="demo">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>password</th>
              </tr>
            </thead>
            <tbody>
              {demo.map((val, idx) => (
                <tr key={`row ${idx}`}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.username}</td>
                  <td>{val.pwd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="premium-content">
        <div className="premium-box-container">
          <div className="premium-box">
            <div className="premium-box-header"></div>
            <h3>by month</h3>
            <p className="price">50.000vnd</p>
            <button type="submit">purchase</button>
          </div>
        </div>
        <div className="premium-box-container">
          <div className="premium-box">
            <div className="premium-box-header premium-year"></div>
            <h3>by year</h3>
            <p className="price">480.000vnd</p>
            <p>save 10.000vnd per month</p>
            <button type="submit">purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;
