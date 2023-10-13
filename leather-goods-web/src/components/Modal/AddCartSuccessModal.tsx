import styles from "@styles/components/modal.module.scss";
import { formatMoney } from "@utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productApi from "src/api/productApi";
import { CartItem } from "src/interfaces/cartItem.interface";
import { addCartSuccess } from "src/slices/cartSlice";

const AddCartSuccessModal = () => {
  const [product, setProduct] = useState<CartItem>();
  const productId = useSelector((state: any) => state.cart.isAddCartSuccess.id);

  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(addCartSuccess(false));
  };

  const getProductInfo = async () => {
    try {
      const res: any = await productApi.getProduct(productId);
      setProduct(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductInfo();
  }, [productId]);

  return (
    <>
      <div id="overlay-screen" onClick={handleCloseModal}></div>
      <div className={`${styles["success-modal"]} ${styles["modal"]}`}>
        <div className={styles["container"]}>
          <h5 className="text-center mt-3">Thêm vào giỏ hàng thành công</h5>
          <hr />
          <span className={styles["close-pop-up"]} onClick={handleCloseModal}>
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
          <div className={styles["mini-cart"]}>
            <div className={styles["cart-img"]}>
              <img src={product?.images[0]} alt="img" />
            </div>
            <div className={styles["cart-content"]}>
              <p>{product?.name}</p>
              <p className="default-price">
                {formatMoney(product?.price || 0)}
              </p>
              <p className="text-danger">
                {formatMoney(product?.promo_price || 0)}
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <Link href="/shopping-cart">
              <button className="btn-white" onClick={handleCloseModal}>
                XEM GIỎ HÀNG
              </button>
            </Link>
            <Link href="/payment">
              <button className="btn-black" onClick={handleCloseModal}>
                THANH TOÁN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCartSuccessModal;
