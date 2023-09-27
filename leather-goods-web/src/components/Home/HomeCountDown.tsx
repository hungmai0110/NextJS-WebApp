import React, { useState, useEffect } from "react";
import styles from "@styles/HomePage.module.scss";

const HomeCountDown = () => {
  const initialTime = {
    days: 1,
    hours: 6,
    minutes: 50,
    seconds: 45,
  };

  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      // Check if the timer is still running
      if (
        timer.days === 0 &&
        timer.hours === 0 &&
        timer.minutes === 0 &&
        timer.seconds === 0
      ) {
        // If time is up, reset the timer
        setTimer(initialTime);
      } else {
        // If there is still time, decrement the timer
        setTimer((prevTimer) => {
          const updatedTimer = { ...prevTimer };
          if (updatedTimer.seconds > 0) {
            updatedTimer.seconds--;
          } else {
            updatedTimer.seconds = 59;

            if (updatedTimer.minutes > 0) {
              updatedTimer.minutes--;
            } else {
              updatedTimer.minutes = 59;

              if (updatedTimer.hours > 0) {
                updatedTimer.hours--;
              } else {
                updatedTimer.hours = 23;

                if (updatedTimer.days > 0) {
                  updatedTimer.days--;
                }
              }
            }
          }

          return updatedTimer;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, initialTime]);

  return (
    <div className={styles["timer"]}>
      <div className={styles["timer-item"]}>
        <p>{timer.days}</p>
        <p>Ngày</p>
      </div>
      <div className={styles["timer-item"]}>
        <p>{timer.hours}</p>
        <p>Giờ</p>
      </div>
      <div className={styles["timer-item"]}>
        <p>{timer.minutes}</p>
        <p>Phút</p>
      </div>
      <div className={styles["timer-item"]}>
        <p>{timer.seconds}</p>
        <p>Giây</p>
      </div>
    </div>
  );
};

export default HomeCountDown;
