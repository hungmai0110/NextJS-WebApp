import React from "react";
import styles from "@styles/HomePage.module.scss";

const HomeCountDown = () => {
  return (
    <div className={styles["timer"]}>
      <div className={styles["timer-item"]}>
        <p>4</p>
        <p>Ngày</p>
      </div>
      <div className={styles["timer-item"]}>
        <p>8</p>
        <p>Giờ</p>
      </div>
      <div className={styles["timer-item"]}>
        <p>9</p>
        <p>Phút</p>
      </div>
      <div className={styles["timer-item"]}>
        <p>30</p>
        <p>Giây</p>
      </div>
    </div>
  );
};

export default HomeCountDown;
