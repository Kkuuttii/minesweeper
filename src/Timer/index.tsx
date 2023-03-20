import { useState, useEffect } from "react";
import { formatTime } from "../utils/global";
import styles from "./index.module.scss";

interface ITimer {
  isTimerStarted: boolean;
}

function Timer({ isTimerStarted }: ITimer) {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    let interval: any = null;

    if (isTimerStarted) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 999) {
            clearInterval(interval);
            return prevTime;
          }
          return prevTime + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }, [isTimerStarted]);

  return (
    <div className={styles.Timer}>
      <div>
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
}

export default Timer;
