import React, { useRef, useState, useEffect } from "react";
import TimeSlider from "react-input-slider";
import "./style.css";
import img from "../../images/tracks/track2.png";
import audio1 from "../../audio/1.mp3";
import audio2 from "../../audio/2.mp3";
import audio3 from "../../audio/3.mp3";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdDoubleArrow,
} from "react-icons/md";
import { BiVolumeFull } from "react-icons/bi";
const data = [
  { id: "1", name: "abc", url: audio1, artist: "abc" },
  { id: "2", name: "edf", url: audio2, artist: "edf" },
  { id: "3", name: "ghi", url: audio3, artist: "ghi" },
];

function PlayBar(setOpen, title, artist, src) {
  // open/close
  const [playBarOpen, setPlayBarOpen] = useState(true);
  setOpen = () => setPlayBarOpen(!playBarOpen);
  // play/pause
  const [isplaying, setIsPlaying] = useState(false);

  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(30);

  useEffect(() => {
    if (isplaying) {
      setInterval(() => {
        // const duration = Math.floor(audioRef?.current?.duration);
        const elapsedTime = Math.floor(audioRef?.current?.currentTime);

        // setDuration(duration);
        setElapsed(elapsedTime);

        // if (elapsedTime === duration) {
        //   setIsPlaying(false);
        //   audioRef.current.stop();
        // }
      }, 100);
    }

    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [
    audioRef?.current?.loadedmetadata,
    audioRef?.current?.readyState,
    isplaying,volume
  ]);

  const handlePausePlayClick = () => {
    if (isplaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isplaying);
  };

  const handleLoadedData = () => {
    setDuration(audioRef?.current?.duration);
    setElapsed(audioRef?.current?.currentTime);
    if (isplaying) audioRef?.current?.play();
  };
  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isplaying) {
      setIsPlaying(true);
      audioRef.current.play();
    }
  };

  const calculateTime = (value) => {
    const minutes =
      Math.floor(value / 60) < 10
        ? `0${Math.floor(value / 60)}`
        : Math.floor(value / 60);

    const seconds =
      Math.floor(value % 60) < 10
        ? `0${Math.floor(value % 60)}`
        : Math.floor(value % 60);

    return `${minutes}:${seconds}`;
  };

  return (
    <div className={`play-bar ${playBarOpen ? "" : "active"}`}>
      <div className="bottom-bar">
        <div className="left-play-bar">
          <img src={img} alt="track" />
          <div className="track-title">
            <h3>{data[audioIndex].name}</h3>
            <p>{data[audioIndex].artist}</p>
          </div>
        </div>
        <div className="middle-play-bar">
          <div className="action-button">
            <div className="elapsed-time">{calculateTime(elapsed)}</div>
            <ul>
              <li
                className="icon-previous"
                onClick={() => setAudioIndex((audioIndex - 1) % data.length)}
              >
                <MdSkipPrevious />
              </li>
              <li className="icon-play" onClick={handlePausePlayClick}>
                {isplaying ? <MdPauseCircleOutline /> : <MdPlayCircleOutline />}
              </li>
              <li
                className="icon-next"
                onClick={() => setAudioIndex((audioIndex + 1) % data.length)}
              >
                <MdSkipNext />
              </li>
            </ul>
            <div className="max-duration">{calculateTime(duration)}</div>
          </div>
          <div className="progress-bar">
            {/* <audio src={audioSrc} /> */}

            <div>
              {/* <input type="range" step="0.01" className="progressBar" /> */}
              <TimeSlider
                axis="x"
                xmax={duration}
                x={currentTime}
                onChange={handleTimeSliderChange}
                styles={{
                  track: {
                    backgroundColor: "var(--text-color)",
                    height: "1px",
                    width: "100%",
                    cursor: "pointer",
                  },
                  active: {
                    backgroundColor: "var(--primary-color)",
                    height: "1px",
                    cursor: "pointer",
                  },
                  thumb: {
                    // marginTop: "-3px",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "var(--primary-color)",
                    borderRadius: "50%",
                    cursor: "pointer",
                  },
                }}
              />
              <audio
                ref={audioRef}
                src={data[audioIndex].url}
                onLoadedData={handleLoadedData}
                onTimeUpdate={() =>
                  setCurrentTime(audioRef.current.currentTime)
                }
                onEnded={() => setAudioIndex((audioIndex + 1) % data.length)}
              />
            </div>
          </div>
        </div>
        <div className="right-play-bar">
          <div className="icon-vol">
            <BiVolumeFull />
          </div>
        </div>
        <div className="play-bar-close">
          <div className={`icon-close ${setOpen ? "active" : ""}`} onClick={setOpen}>
            <MdDoubleArrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayBar;
