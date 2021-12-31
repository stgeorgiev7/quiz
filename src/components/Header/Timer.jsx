import { useState, useEffect } from "react";
import styles from "./Timer.module.scss";
import classNames from "classnames";
import Countdown, { zeroPad } from "react-countdown";
import { Typography } from "@mui/material";

export default function Timer({timeOut}) {
  const getLocalStorageValue = (s) => localStorage.getItem(s);
  const [time, setTime] = useState({ date: Date.now(), delay: 150000 });

  const wantedDelay = 150000;

  useEffect(() => {
    const savedData = getLocalStorageValue("time_end");
    if (savedData != null && !isNaN(savedData)) {
      const currentTime = Date.now();
      const delta = parseInt(savedData, 10) - currentTime;

      if (delta > wantedDelay) {
        if (localStorage.getItem("time_end").length > 0) {
          localStorage.removeItem("time_end");
        } else {
          setTime({ date: currentTime, delay: delta });
        }
      }
    }
  }, []);

  const renderer = ({ minutes, seconds }) => {
    return (
      <span>
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  };

  return (
    <div className={classNames(styles.container)}>
      <Typography className={classNames(styles.timer)} variant="h3">
        <Countdown
          date={time.date + time.delay}
          renderer={renderer}
          onStart={(delta) => {
            if (localStorage.getItem("time_end") == null) {
              localStorage.setItem(
                "time_end",
                JSON.stringify(time.date + time.delay)
              );
            }
          }}
          onComplete={() => {
            if (localStorage.getItem("time_end") !== null) {
              localStorage.removeItem("time_end");
              timeOut(true);
            }
          }}
        />
      </Typography>
      <span className={classNames(styles.remaining)}>TIME REMAINING</span>
    </div>
  );
}
