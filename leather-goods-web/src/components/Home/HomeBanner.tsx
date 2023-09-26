import React from "react";
import Link from "next/link";
import styles from "@styles/HomePage.module.scss"

const HomeBanner = () => {
  return (
    <div id={styles["banner"]}>
      <div className={styles["banner-image"]}>
        <Link href="/">
          <img src="banner.jpg" alt="banner" />
        </Link>
        <a href="https://www.facebook.com/ludhandmadevn" target="_blank">
          <button className={styles["follow"]}>Theo dõi</button>
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;
