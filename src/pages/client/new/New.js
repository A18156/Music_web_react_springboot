import React, { useState } from "react";
import "./style.css";
import Carousel from "../../../components/carousel/Carousel";
import img1 from "../../../images/album/album1.jpg";
import img2 from "../../../images/album/album2.jpg";
import img3 from "../../../images/album/album3.jpg";
import imgt1 from "../../../images/tracks/track1.jfif";
import imgt2 from "../../../images/tracks/track2.png";
import imgt3 from "../../../images/tracks/track3.jpg";
// import headerImg from "../../../images/Wallpaper-Engine-Steam-App.jpg";

const data = [
  { title: "abc", img: img1, singer: "abc" },
  { title: "abcd", img: img1, singer: "abcd" },
  { title: "abcef", img: img1, singer: "abc" },
  { title: "abcabc", img: img1, singer: "abcabc" },
  { title: "abc", img: img1, singer: "abc" },
  { title: "abcd", img: img1, singer: "abcd" },
  { title: "abcef", img: img1, singer: "abc" },
  { title: "abcabc", img: img1, singer: "abcabc" },
];
const datat = [
  {
    img: imgt1,
  },
  { img: imgt2 },
  { img: imgt3 },
];
const type = [
  { type: "pop" },
  { type: "r&b" },
  { type: "elctronic" },
  { type: "rock" },
  { type: "country" },
  { type: "trap" },
  { type: "jazz" },
  { type: "hip hop" },
];

function New() {
  const [selectAlbum, setSelectAlbum] = useState(0);

  const [activeTab, setActiveTab] = useState(0);
  const toggleTab = (idx) => {
    setActiveTab(idx);
  };
  return (
    <>
      {/* <div className="header-img">
        <img src={headerImg} alt="bg-img" />
      </div> */}
      <div className="tabs-container">
        <div className="tabs">
          <div className="products-tab">
            <ul>
              <li
                className={`tab ${activeTab === 0 ? "active-tab" : ""}`}
                onClick={() => toggleTab(0)}
              >
                songs
              </li>
              <li
                className={`tab ${activeTab === 1 ? "active-tab" : ""}`}
                onClick={() => toggleTab(1)}
              >
                albums
              </li>
            </ul>
          </div>
          <div className="tab-line"></div>
          <div className="tab-cotent">
            {/* song content */}
            <div
              className={`tab-content ${
                activeTab === 0 ? "active-tab-content" : ""
              }`}
            >
              <div className="songs">
                <div className="box-container">
                  {datat.map((val, idx) => (
                    <div key={idx} className="new-box">
                      <img src={val.img} alt={"img" + idx} />
                      <div className="column">
                        <h3>track 1</h3>
                        <p>singer</p>
                      </div>
                    </div>
                  ))}
                  {datat.map((val, idx) => (
                    <div key={idx} className="new-box">
                      <img src={val.img} alt={"img" + idx} />
                      <div className="column">
                        <h3>track 1</h3>
                        <p>singer</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* album content */}
            <div
              className={`tab-content ${
                activeTab === 1 ? "active-tab-content" : ""
              }`}
            >
              <div className="album-tab-conetent">
          
                  {data.map((val, idx) => (
                    <div key={idx} className="album-box">
                      <div className="album-box-img">
                        <img className="img" src={val.img} alt={"img" + idx} />
                      </div>
                      <div className="album-box-text">
                        <h3>{val.title}</h3>
                        <p>{val.singer}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="songs">
          <div className="box-container">
            {datat.map((val, idx) => (
              <div key={idx} className="new-box">
                <img src={val.img} alt={"img" + idx} />
                <div className="column">
                  <h3>track 1</h3>
                  <p>singer</p>
                </div>
              </div>
            ))}
            {datat.map((val, idx) => (
              <div key={idx} className="new-box">
                <img src={val.img} alt={"img" + idx} />
                <div className="column">
                  <h3>track 1</h3>
                  <p>singer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}
export default New;
