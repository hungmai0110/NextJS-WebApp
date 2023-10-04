import React from "react";
import Link from "next/link";
import { formatMoney } from "@utils/utils";
import styles from "@styles/ProductCard.module.scss";

interface ProductDetail {
  id: number;
  name: string;
  images: string[];
  price: number;
  promo_price: number;
  discount: string;
  type: string;
  gender: string;
}

const ProductCard = ({ product }: { product: ProductDetail }) => {
  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-item"]}>
        <div className={styles["product-image"]}>
          <Link href={`/products/${product.id}}`}>
            <div className={styles["image-hover"]}>
              <img
                src={product.images[0]}
                alt="default-image"
                className={styles["default-image"]}
              />
              <img
                src={product.images[1]}
                alt="img-change"
                className={styles["img-change"]}
              />
            </div>
          </Link>
          <div className={styles["discount"]}>
            <p>{product.discount}</p>
          </div>
          <div className={styles["add-to-cart"]}>
            <span>
              <i className="fa-solid fa-cart-plus"></i>
            </span>
          </div>
        </div>

        <div className={styles["product-content"]}>
          <h3>{product.name}</h3>
          <div className={styles["price"]}>
            <p>{formatMoney(product.price)}</p>
            <p className={styles["discount-price"]}>
              {formatMoney(product.promo_price)}
            </p>
          </div>
          <button className={styles["btn-buy"]}>Mua ngay</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
