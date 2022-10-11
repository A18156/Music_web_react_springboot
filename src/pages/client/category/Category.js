import React from "react";
import "./style.css";
import Carousel from "../../../components/carousel/Carousel";
import img1 from "../../../images/album/album1.jpg";

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
const data1 = [
  { title: "abc", img: img1, singer: "abc" },
  { title: "abcd", img: img1, singer: "abcd" },
  { title: "abcef", img: img1, singer: "abc" },
  { title: "abcabc", img: img1, singer: "abcabc" },
  { title: "abc", img: img1, singer: "abc" },
  { title: "abcd", img: img1, singer: "abcd" },
  { title: "abcef", img: img1, singer: "abc" },
  { title: "abcabc", img: img1, singer: "abcabc" },
];
const data2 = [
  { title: "abc", img: img1, singer: "abc" },
  { title: "abcd", img: img1, singer: "abcd" },
  { title: "abcef", img: img1, singer: "abc" },
  { title: "abcabc", img: img1, singer: "abcabc" },
  { title: "abc", img: img1, singer: "abc" },
  { title: "abcd", img: img1, singer: "abcd" },
  { title: "abcef", img: img1, singer: "abc" },
  { title: "abcabc", img: img1, singer: "abcabc" },
];
function Category() {
  var settingData = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          
        },
      },
    ],
  };
  return (
    <div>
      <div className="category-container">
        <div className="category-content">
          <div>
            <h2 className="category-title">hip-hop</h2>
            <Carousel set={settingData}>
              {data.map((val, idx) => (
                <div key={idx} className="category-box">
                  <div className="category-box-img">
                    <img className="img" src={val.img} alt={"img" + idx} />
                  </div>
                  <div className="">
                    <h3>{val.title}</h3>
                    <p>{val.singer}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="category-container">
        <div className="category-content">
          <div>
            <h2 className="category-title">aucotic</h2>
            <Carousel set={settingData}>
              {data.map((val, idx) => (
                <div key={idx} className="category-box">
                  <div className="category-box-img">
                    <img className="img" src={val.img} alt={"img" + idx} />
                  </div>
                  <div className="">
                    <h3>{val.title}</h3>
                    <p>{val.singer}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="category-container">
        <div className="category-content">
          <div>
            <h2 className="category-title">rock</h2>
            <Carousel set={settingData}>
              {data.map((val, idx) => (
                <div key={idx} className="category-box">
                  <div className="category-box-img">
                    <img className="img" src={val.img} alt={"img" + idx} />
                  </div>
                  <div className="">
                    <h3>{val.title}</h3>
                    <p>{val.singer}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="category-container">
        <div className="category-content">
          <div>
            <h2 className="category-title">pop</h2>
            <Carousel set={settingData}>
              {data.map((val, idx) => (
                <div key={idx} className="category-box">
                  <div className="category-box-img">
                    <img className="img" src={val.img} alt={"img" + idx} />
                  </div>
                  <div className="">
                    <h3>{val.title}</h3>
                    <p>{val.singer}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
