import React, { useEffect, useState } from "react";
import HomeListProducts from "./HomeListProducts";
import styles from "@styles/pages/HomePage.module.scss";
import { Product } from "src/interfaces/product.interface";
import productApi from "src/api/productApi";

const HomeBestSellProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const res: Product[] = await productApi.get();
      const result = res.filter((p) => p.tag === "bestsell");
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles["best-sell-products"]}>
      <h2>SẢN PHẨM BÁN CHẠY</h2>
      <p className={styles["description"]}>
        Những sản phẩm được lòng khách hàng nhất thời gian qua
      </p>
      <HomeListProducts products={products} />
    </div>
  );
};

export default HomeBestSellProducts;
