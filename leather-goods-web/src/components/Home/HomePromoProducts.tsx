import React, { useEffect, useState } from "react";
import HomeListProducts from "./HomeListProducts";
import HomeCountDown from "./HomeCountDown";
import styles from "@styles/pages/HomePage.module.scss";
import productApi from "src/api/productApi";
import { Product } from "src/interfaces/product.interface";

const HomePromoProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const res: Product[] = await productApi.get();
      const result = res.filter((p) => p.tag === "promo");
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles["promo-products"]}>
      <h2>SẢN PHẨM KHUYẾN MẠI</h2>
      <HomeCountDown />
      <HomeListProducts products={products} />
    </div>
  );
};

export default HomePromoProducts;
