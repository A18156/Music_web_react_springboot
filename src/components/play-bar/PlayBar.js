import React, { useState } from "react";
import "./style.css";
import img from "../../images/tracks/track2.png";

function PlayBar() {
  let [timePlay, setTimePlay] = useState(0);
  return (
    <div className="play-bar">
      <div className="bottom-bar">
        <div className="left-play-bar">
          <img src={img} alt="track" />
          <div className="track-title">
            <h3>track name</h3>
            <p>singer</p>
          </div>
        </div>
        <div className="middle-play-bar">
          <div className="action-button">
            <ul>
              <li>
                <box-icon name="skip-previous" size="50px"></box-icon>
              </li>
              <li>
                <box-icon name="play-circle" size="50px"></box-icon>
              </li>
              <li>
                <box-icon name="skip-next" size="50px"></box-icon>
              </li>
            </ul>
          </div>
          <div className="progress-bar">
            <input type="range" min="0" max="100" value="10" onChange={timePlay}/>
          </div>
        </div>
        <div className="right-play-bar">
          <div className="vol">
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayBar;
