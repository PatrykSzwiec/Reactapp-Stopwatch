import styles from './Stopwatch.module.scss';
import React, { useState, useEffect } from "react";
import Button from '../Button/Button';

const Stopwatch = () => {
  // state to store time
  const [time, setTime] = useState(0);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isPause) {
      interval = setInterval(() => {
        // Increment the time by 1 millisecond
        setTime((time) => time + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      // Clean up the interval when the component is unmounted or when the dependencies change
      clearInterval(interval);
    };
  }, [isPause]);

  // Hours calculation
  const hours = String(Math.floor(time / 360000)).padStart(2, '0');

  // Minutes calculation
  const minutes = String(Math.floor((time % 360000) / 6000)).padStart(2, '0');

  // Seconds calculation
  const seconds = String(Math.floor((time % 6000) / 100)).padStart(2, '0');

  // Milliseconds calculation
  const milliseconds = String(time % 100).padStart(2, '0');

  // Method to start timer
  const startTimer = () => {
    setIsPause(true);
  };

  // Method to stop timer
  const stopTimer = () => {
    setIsPause(false);
  };

  // Method to reset timer
  const resetTimer = () => {
    setIsPause(false);
    setTime(0);
  };

  return (
    <div className={styles.time}>
      <span className={styles.timetext}>
        <span className={styles.hours}>{hours}:</span>
        <span className={styles.minutes}>{minutes}:</span>
        <span className={styles.seconds}>{seconds}.</span>
        <span className={styles.milliseconds}>{milliseconds}</span>
    </span>
      <Button onClick={startTimer}>START</Button>
      <Button onClick={stopTimer}>STOP</Button>
      <Button onClick={resetTimer}>RESET</Button>
    </div>
  );
};

export default Stopwatch;