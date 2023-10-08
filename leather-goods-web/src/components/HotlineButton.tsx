import React from "react";
import Link from "next/link";
import styles from "@styles/components/HotlineButton.module.scss";

const HotlineButton = () => {
  return (
    <div className={styles["hotline-phone-ring-wrap"]}>
      <div className={styles["hotline-phone-ring"]}>
        <div className={styles["hotline-phone-ring-circle"]}></div>
        <div className={styles["hotline-phone-ring-circle-fill"]}></div>
        <div className={styles["hotline-phone-ring-img-circle"]}>
          <Link href="tel:0966516228" className={styles["pps-btn-img"]}>
            <img
              src="https://nguyenhung.net/wp-content/uploads/2019/05/icon-call-nh.png"
              alt="hotline"
              width="50"
            />
          </Link>
        </div>
      </div>
      <div className={styles["hotline-bar"]}>
        <Link href="tel:0966516228">
          <span className="text-hotline">0966.516.228</span>
        </Link>
      </div>
    </div>
  );
};

export default HotlineButton;
