import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Countdown() {
  const [duration, setduration] = useState(0);
  let audio = new Audio("/cardflip.mov")

  useEffect(() => {
    console.log("duration changed!");
  }, [duration]);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };


  return (
    <div className="countdown timer-wrapper">
      {duration && <CountdownCircleTimer
        onComplete={() => {
            audio.play()
        }}
        isPlaying
        duration={duration}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
      >
          {renderTime}
      </CountdownCircleTimer>}
      <br />
      <button className="button" onClick={() => setduration(10)}>
        {" "}
        5 Min countdown{" "}
      </button>
      <button
        className="button"
        onClick={() =>
          setduration(
            (Date.now() - new Date("October 16, 20 17:20:00 GMT+02:00")) / 1000
          )
        }
      >
        {" "}
        Til vi skal dra{" "}
      </button>
      <button className="button" onClick={() => setduration(0)}>
        {" "}
        Reset{" "}
      </button>
    </div>
  );
}
