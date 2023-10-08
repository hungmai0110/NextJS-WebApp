import React from "react";
import Link from "next/link";
import styles from "@styles/pages/HomePage.module.scss";

const HomeBanner = () => {
  return (
    <div id={styles["banner"]}>
      <div className={styles["banner-image"]}>
        <img src="banner.jpg" alt="banner" />
        <a href="https://www.facebook.com/ludhandmadevn" target="_blank">
          <button className={styles["follow"]}>Theo dõi</button>
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;
