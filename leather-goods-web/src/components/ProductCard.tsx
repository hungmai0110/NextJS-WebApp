import styles from "@styles/components/ProductCard.module.scss";
import { formatMoney } from "@utils/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Product } from "src/interfaces/product.interface";
import { addCartSuccess, addToCart } from "src/slices/cartSlice";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    dispatch(addCartSuccess({ isShow: true, id: product.id }));
  };

  const handleClickBuy = (product: Product) => {
    dispatch(addToCart(product));
    router.push("/payment");
  };

  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-item"]}>
        <div className={styles["product-image"]}>
          <Link href={`/products/${product.id}`}>
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
          <div
            className={styles["add-to-cart"]}
            onClick={() => handleAddToCart(product)}
          >
            <span>
              <i className="fa-solid fa-cart-plus"></i>
            </span>
          </div>
        </div>

        <div className={styles["product-content"]}>
          <h3>{product.name}</h3>
          <div className={styles["price"]}>
            <p>{formatMoney(product.promo_price)}</p>
            <p className={styles["discount-price"]}>
              {formatMoney(product.price)}
            </p>
          </div>
          <button
            className={`${styles["btn-buy"]} btn-black`}
            onClick={() => handleClickBuy(product)}
          >
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
