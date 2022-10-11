import React from "react";
import "./style.css";

function Premium() {
  return (
    <div className="premium-container">
      <div className="premium-header">
        <h1>Unlimited music</h1>
        <p>
          High quality online music service, combined with exclusive facilities
          for VIP members
        </p>
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
