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
      }, 1);
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
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100 ;

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
    <div>
      <p className={styles.stopwatch}>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}.
        {milliseconds.toString().padStart(2, "0")}
      </p>
      {/* <Button onClick={startTimer}>START</Button> */}
      <Button onClick={startTimer}>START</Button>
      <Button onClick={stopTimer}>STOP</Button>
      <Button onClick={resetTimer}>RESET</Button>
    </div>
  );
};

export default Stopwatch;