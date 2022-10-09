import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import imgt2 from "../../../images/tracks/track2.png";
import img2 from "../../../images/album/album2.jpg";

function Album() {
  let { albumName } = useParams();
  return (
    <div className="album">
      <div className="album-thumbnail">
        <img src={img2} alt="" />
        <div className="album-header">
          <div className="album-title">
            <p>12/09</p>
            <h1>{albumName}</h1>
          </div>
          <div className="album-icon">
            <i className="icon track-play-icon">
              <box-icon type="solid" name="right-arrow" size="sm"></box-icon>
            </i>
            <ul>
              <li className="icon">
                <box-icon type="solid" name="heart" size="sm"></box-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="album-content">
        <div className="album-track track-active">
          <div className="track">
            <div className="track-img">
              <img src={imgt2} alt={"img"} />
              <div className="track-play">
                <box-icon name="play-circle" size="sm"></box-icon>
              </div>
            </div>
            <div className="column">
              <h3>track 1</h3>
              <p>singer</p>
            </div>
          </div>
          <ul className="track-icon">
            <li className="icon">
              <box-icon type="solid" name="heart" size="sm"></box-icon>
            </li>
            <li className="icon">
              <box-icon name="down-arrow-circle" size="sm"></box-icon>
            </li>
          </ul>
        </div>
        <div className="album-track">
          <div className="track">
            <div className="track-img">
              <img src={imgt2} alt={"img"} />
              <div className="track-play">
                <box-icon name="play-circle" size="sm"></box-icon>
              </div>
            </div>
            <div className="column">
              <h3>track 1</h3>
              <p>singer</p>
            </div>
          </div>
          <ul className="track-icon">
            <li className="icon">
              <box-icon type="solid" name="heart" size="sm"></box-icon>
            </li>
            <li className="icon">
              <box-icon name="down-arrow-circle" size="sm"></box-icon>
            </li>
          </ul>
        </div><div className="album-track">
          <div className="track">
            <div className="track-img">
              <img src={imgt2} alt={"img"} />
              <div className="track-play">
                <box-icon name="play-circle" size="sm"></box-icon>
              </div>
            </div>
            <div className="column">
              <h3>track 1</h3>
              <p>singer</p>
            </div>
          </div>
          <ul className="track-icon">
            <li className="icon">
              <box-icon type="solid" name="heart" size="sm"></box-icon>
            </li>
            <li className="icon">
              <box-icon name="down-arrow-circle" size="sm"></box-icon>
            </li>
          </ul>
        </div><div className="album-track">
          <div className="track">
            <div className="track-img">
              <img src={imgt2} alt={"img"} />
              <div className="track-play">
                <box-icon name="play-circle" size="sm"></box-icon>
              </div>
            </div>
            <div className="column">
              <h3>track 1</h3>
              <p>singer</p>
            </div>
          </div>
          <ul className="track-icon">
            <li className="icon">
              <box-icon type="solid" name="heart" size="sm"></box-icon>
            </li>
            <li className="icon">
              <box-icon name="down-arrow-circle" size="sm"></box-icon>
            </li>
          </ul>
        </div><div className="album-track">
          <div className="track">
            <div className="track-img">
              <img src={imgt2} alt={"img"} />
              <div className="track-play">
                <box-icon name="play-circle" size="sm"></box-icon>
              </div>
            </div>
            <div className="column">
              <h3>track 1</h3>
              <p>singer</p>
            </div>
          </div>
          <ul className="track-icon">
            <li className="icon">
              <box-icon type="solid" name="heart" size="sm"></box-icon>
            </li>
            <li className="icon">
              <box-icon name="down-arrow-circle" size="sm"></box-icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Album;
