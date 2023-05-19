import styles from './Stopwatch.module.scss';
import React, { useState, useEffect } from "react";
import Button from '../Button/Button';

const Stopwatch = () => {
  // state to store time
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval = null;

    // If the stopwatch is active and not paused, start the interval to update the time
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        // Increment the time by 1 millisecond
        setTime((time) => time + 1);
      }, 10);
    } else {
      // If the stopwatch is not active or is paused, clear the interval
      clearInterval(interval);
    }
    return () => {
      // Clean up the interval when the component is unmounted or when the dependencies change
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

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
    setIsActive(true);
    setIsPaused(false);
  };

  // Method to stop timer
  const stopTimer = () => {
    setIsPaused(true);
  };

  // Method to reset timer
  const resetTimer = () => {
    setIsActive(false);
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