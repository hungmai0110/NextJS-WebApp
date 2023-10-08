// components/BackToTopButton.js
import { useState, useEffect } from "react";
import styles from "@styles/components/BackToTopButton.module.scss";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const yOffset = window.scrollY;
    if (yOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible ? (
    <button className={styles["btn-top"]} onClick={scrollToTop}>
      <span>
        <i className="fa-solid fa-angles-up"></i>
      </span>
    </button>
  ) : (
    ""
  );
};

export default BackToTopButton;
