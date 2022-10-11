import React from "react";
import "./style.css";
import imgt1 from "../../../images/tracks/track1.jfif";
import imgt2 from "../../../images/tracks/track2.png";
import imgt3 from "../../../images/tracks/track3.jpg";
const datat = [
  {
    img: imgt1,
    singer: "abc",
    name: "abc",
  },
  { img: imgt2, singer: "abcdef", name: "abcdef" },
  { img: imgt3, singer: "abcabc", name: "abcabc" },
];
function Trending() {
  return (
    <div className="trend-container">
      <h1 className="trend-title">Trending</h1>
      <div className="trend-content">
        <ul>
          {datat.map((val, idx) => (
            <li key={idx} className="trend-songs">
              <span className="rank-number"> <b>{idx + 1}</b></span><br />
              <img src={val.img} alt="" />
              <div>
                <span>{val.name}</span>
                <span> - </span>
                <span>{val.singer}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Trending;
