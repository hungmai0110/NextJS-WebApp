import React from "react";
import Link from "next/link";
import { formatMoney } from "@utils/utils";
import styles from "@styles/HomePage.module.scss";

const ProductCard = () => {
  return (
    <div className={styles["product"]}>
      <div className={styles["product-item"]}>
        <div className={styles["product-image"]}>
          <Link href={`san-pham/1}`}>
            <div className={styles["image-hover"]}>
              <img
                src="/image-1.jpeg"
                alt="1"
                className={styles["default-image"]}
              />
              <img
                src="/image-2.jpeg"
                alt="2"
                className={styles["img-change"]}
              />
              <div className={styles["add-to-cart"]}>
                <span>
                  <i className="fa-solid fa-cart-plus"></i>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles["discount"]}>
          <p>10%</p>
        </div>
        <div className={styles["product-content"]}>
          <h3>Ví Passport Da Bò Sáp Handmade</h3>
          <div className={styles["price"]}>
            <p className={styles["discount-price"]}>{formatMoney(500000)}</p>
            <p>{formatMoney(400000)}</p>
          </div>
          <button className={styles["btn-buy"]}>Mua ngay</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
