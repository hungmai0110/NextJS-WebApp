import React from "react";
import HomeListProducts from "./HomeListProducts";
import styles from "@styles/HomePage.module.scss";

const HomeBestSellProducts = () => {
  return (
    <div className={styles["best-sell-products"]}>
      <h2>SẢN PHẨM BÁN CHẠY</h2>
      <p className={styles["description"]}>Những sản phẩm được lòng khách hàng nhất thời gian qua</p>
      <HomeListProducts />
    </div>
  );
};

export default HomeBestSellProducts;
