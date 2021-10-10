import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Countdown() {
  const [duration, setduration] = useState(0);
  let audio = new Audio("/cardflip.mov");

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
      {duration && (
        <CountdownCircleTimer
          onComplete={() => {
            audio.play();
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
        </CountdownCircleTimer>
      )}
      <br />
      <button className="button" onClick={() => setduration(300)}>
        {" "}
        5 Min countdown{" "}
      </button>
      <button
        className="button"
        onClick={() =>
          setduration(
            (new Date("Sun Oct 16 2021 18:20:00 GMT+0200") - Date.now()) /
              100000
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
