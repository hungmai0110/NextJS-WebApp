import React, { useEffect, useState } from "react";
import Link from "next/link";
import { formatMoney } from "@utils/utils";
import styles from "@styles/components/modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "src/interfaces/cartItem.interface";
import { decrementProduct, incrementProduct } from "src/slices/cartSlice";

interface ModalProps {
  onClose: () => void;
}

const CartModal: React.FC<ModalProps> = ({ onClose }) => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalMoneyProductsCart = cartItems.reduce((total: any, p: any) => {
    return total + p.price * 1;
  }, 0);

  const handleIncrement = (productId: number) => {
    dispatch(incrementProduct(productId));
  };

  const handleDecrement = (productId: number) => {
    dispatch(decrementProduct(productId));
  };

  return (
    <>
      <div id="overlay-screen" onClick={onClose}></div>
      <div id={styles["cart-modal"]}>
        <div className={styles["mini-cart-container"]}>
          <h5 className="text-center">GIỎ HÀNG</h5>
          <p className={`${styles["message"]} fst-italic`}>
            Không có sản phẩm trong giỏ hàng
          </p>
          <span className={styles["close-pop-up"]} onClick={onClose}>
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
          <hr />

          <div className={styles["list-cart-products"]}>
            {cartItems.map((cartItem: CartItem) => (
              <div key={cartItem.id}>
                <div className={styles["mini-cart-product"]}>
                  <div className="d-flex">
                    <div className={styles["mini-cart-product-image"]}>
                      <img src={cartItem.images[1]} alt="bao da ip 7" />
                    </div>
                    <div className={styles["mini-cart-product-content"]}>
                      <p className="mb-2">{cartItem.name}</p>
                      <div className={styles["mini-cart-data"]}>
                        <div className={styles["change-count"]}>
                          <span className="border d-inline-block me-3">
                            <span
                              className={`${styles["btn-minus-count"]} py-1 px-3 border-end d-inline-block fw-bold`}
                              onClick={() => handleDecrement(cartItem.id)}
                            >
                              -
                            </span>
                            <span className="py-1 px-3 d-inline-block fw-bold count">
                              {cartItem.quantity}
                            </span>
                            <span
                              className={`${styles["btn-plus-count"]} py-1 px-3 border-start d-inline-block fw-bold`}
                              onClick={() => handleIncrement(cartItem.id)}
                            >
                              +
                            </span>
                          </span>
                        </div>
                      </div>
                      <span className={styles["delete-product"]}>
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    </div>
                  </div>
                  <p className="text-danger d-flex align-items-center">
                    {formatMoney(cartItem.promo_price)}
                  </p>
                </div>
                <hr />
              </div>
            ))}
          </div>

          <div className={styles["tottal-money"]}>
            <p>TỔNG TIỀN</p>
            <p className="text-danger">{formatMoney(totalMoneyProductsCart)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <Link href="/shopping-cart">
              <button className="btn-white" onClick={onClose}>
                XEM GIỎ HÀNG
              </button>
            </Link>
            <Link href="/payment">
              <button className="btn-black" onClick={onClose}>
                THANH TOÁN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
