import React, { useState } from "react";
import Link from "next/link";
import { formatMoney } from "@utils/utils";
import styles from "@styles/components/modal.module.scss";

interface ModalProps {
  onClose: () => void;
}

const CartModal: React.FC<ModalProps> = ({ onClose }) => {
  const products: any = [
    {
      id: 1,
      name: "Ví Kẹp Tiền Da Bò Tiện Lợi - 6352",
      images: [
        "https://product.hstatic.net/1000260559/product/vi_kep_tien_da_bo__1__77d2e5f68b9c4217bdccf11f48c6b461_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi_kep_tien_da_bo__2__29aa101be3194f1ebee136e0e47e43bf_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi_kep_tien_da_bo__3__c6cd1a054a9746efb1f4683755b2381d_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi_kep_tien_da_bo__1__77d2e5f68b9c4217bdccf11f48c6b461_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi_kep_tien_da_bo__4__df8c081ea9d344cf8b24d5d18ae9fc95_master.jpg",
      ],
      price: 500000,
      promo_price: 350000,
      discount: "-32%",
      type: "vidanam",
      gender: "male",
    },
    {
      id: 2,
      name: "Ví Da Nam Thiết Kế Độc Đáo - 3003",
      images: [
        "https://product.hstatic.net/1000260559/product/vi-da-nam-thiet-ke-doc-dao-2173003__1__86c136badc124b50ba5367b2d105e33f_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-da-nam-thiet-ke-doc-dao-2173003__4__287a71b4f4d34461a9e47f176240cac1_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-da-nam-thiet-ke-doc-dao-2173003__6__57e2a985b2df4911a8520648681246db_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-da-nam-thiet-ke-doc-dao-2173003__3__0eb167e766954c54b9f9b7ea3fe1c1eb_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-da-nam-thiet-ke-doc-dao-2173003__5__25315f44245a4c8dbcb3a30407d730fb_master.jpg",
      ],
      price: 400000,
      promo_price: 290000,
      discount: "-27%",
      type: "vidanam",
      gender: "male",
    },
    {
      id: 3,
      name: "Ví Cầm Tay, Xách Tay - 1625",
      images: [
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__6__c3fd92966a88484eaf2d56b002688a56_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__4__c497b56b724d4988875cb448da6e9c84_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__1__9964c5c4b02e41f3ae5b9473f577eee3_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__5__5335fbdcbf5f42c2a4a276f383044c4c_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__4__c497b56b724d4988875cb448da6e9c84_master.jpg",
      ],
      price: 350000,
      promo_price: 240000,
      discount: "-30%",
      type: "vidanam",
      gender: "male",
    },
    {
      id: 4,
      name: "Ví Cầm Tay, Xách Tay - 1625",
      images: [
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__6__c3fd92966a88484eaf2d56b002688a56_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__4__c497b56b724d4988875cb448da6e9c84_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__1__9964c5c4b02e41f3ae5b9473f577eee3_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__5__5335fbdcbf5f42c2a4a276f383044c4c_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__4__c497b56b724d4988875cb448da6e9c84_master.jpg",
      ],
      price: 350000,
      promo_price: 240000,
      discount: "-30%",
      type: "vidanam",
      gender: "male",
    },
  ];
  const [cartItems, setCartItems] = useState(
    products.map((product: any) => ({ ...product, quantity: 1 }))
  );

  const totalMoneyProductsCart = products.reduce((total: any, p: any) => {
    return total + p.price * 1;
  }, 0);

  const handleIncrement = (productId: number) => {
    const updatedCartItems = cartItems.map((item: any) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (productId: number) => {
    const updatedCartItems = cartItems.map((item: any) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
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
            {cartItems.map((product: any) => (
              <div key={product.id}>
                <div className={styles["mini-cart-product"]}>
                  <div className="d-flex">
                    <div className={styles["mini-cart-product-image"]}>
                      <img src={product.images[1]} alt="bao da ip 7" />
                    </div>
                    <div className={styles["mini-cart-product-content"]}>
                      <p className="mb-2">{product.name}</p>
                      <div className={styles["mini-cart-data"]}>
                        <div className={styles["change-count"]}>
                          <span className="border d-inline-block me-3">
                            <span
                              className={`${styles["btn-minus-count"]} py-1 px-3 border-end d-inline-block fw-bold`}
                              onClick={() => handleDecrement(product.id)}
                            >
                              -
                            </span>
                            <span className="py-1 px-3 d-inline-block fw-bold count">
                              {product.quantity}
                            </span>
                            <span
                              className={`${styles["btn-plus-count"]} py-1 px-3 border-start d-inline-block fw-bold`}
                              onClick={() => handleIncrement(product.id)}
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
                    {formatMoney(product.price)}
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
              <button className="btn-white">XEM GIỎ HÀNG</button>
            </Link>
            <Link href="/payment">
              <button className="btn-black">THANH TOÁN</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
