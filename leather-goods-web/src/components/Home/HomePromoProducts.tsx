import React from "react";
import HomeListProducts from "./HomeListProducts";
import HomeCountDown from "./HomeCountDown";
import styles from "@styles/pages/HomePage.module.scss"

const HomePromoProducts = () => {
  return (
    <div className={styles["promo-products"]}>
      <h2>SẢN PHẨM KHUYẾN MẠI</h2>
      <HomeCountDown />
      <HomeListProducts />
    </div>
  );
};

export default HomePromoProducts;
