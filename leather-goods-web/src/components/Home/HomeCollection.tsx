import React from "react";
import styles from "@styles/pages/HomePage.module.scss";

const HomeCollection = () => {
  return (
    <div id={styles["collection"]}>
      <div className={`${styles["collection-container"]} layout-content`}>
        <div className={styles["col"]}>
          <a href="./main-page/shop.html#vidanu">
            <div className={styles["image-collection"]}>
              <img src="femaleCollection.jpg" alt="nu" />
              <h3>BỘ SƯU TẬP DÀNH CHO NỮ</h3>
              <div className={styles["overlay"]}></div>
            </div>
          </a>
        </div>
        <div className={styles["col"]}>
          <a href="./main-page/shop.html#vidanam">
            <div className={styles["image-collection"]}>
              <img src="maleCollection.webp" alt="nam" />
              <h3>BỘ SƯU TẬP DÀNH CHO NAM</h3>
              <div className={styles["overlay"]}></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCollection;
