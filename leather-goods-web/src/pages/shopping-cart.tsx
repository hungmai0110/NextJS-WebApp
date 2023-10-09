import React from "react";
import Link from "next/link";
import styles from "@styles/pages/ShoppingCartPage.module.scss";
import { formatMoney } from "@utils/utils";

const ShoppingCartPage = () => {
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
  ];

  const totalMoneyProductsCart = products.reduce((total: any, p: any) => {
    return total + p.promo_price * 1;
  }, 0);

  return (
    <div className="container">
      <div className={styles["shopping-cart"]}>
        <div className={styles["cart-info"]}>
          <div className={styles["title"]}>
            <h4>Giỏ hàng</h4>
            <span>
              Số lượng:
              <p className="text-danger fw-bold">{products.length}</p> sản phẩm
            </span>
          </div>
          <div className={styles["list-cart-items"]}>
            {products.map((product: any) => (
              <div key={product.id} className={styles["cart-item"]}>
                <div className={styles["mini-cart"]}>
                  <div className={styles["product-img"]}>
                    <img src={product.images[0]} alt="img" />
                  </div>
                  <div className={styles["product-content"]}>
                    <p>{product.name}</p>
                    <p>{formatMoney(product.price)}</p>
                    <p>{formatMoney(product.promo_price)}</p>
                    <span>
                      <i className="fa-solid fa-trash-can"></i>
                    </span>
                  </div>
                </div>
                <div className={styles["change-count"]}>
                  <span className="border d-inline-block me-3">
                    <span
                      className={`${styles["btn-minus-count"]} py-1 px-3 border-end d-inline-block fw-bold`}
                    >
                      -
                    </span>
                    <span className="py-1 px-3 d-inline-block fw-bold count">
                      1
                    </span>
                    <span
                      className={`${styles["btn-plus-count"]} py-1 px-3 border-start d-inline-block fw-bold`}
                    >
                      +
                    </span>
                  </span>
                </div>
                <p className="text-danger">
                  {formatMoney(product.promo_price)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["order-info"]}>
          <div className={styles["order-container"]}>
            <h4>Thông tin đơn hàng</h4>
            <div className={styles["total-money"]}>
              <p>Tổng tiền:</p>
              <p className="text-danger">
                {formatMoney(totalMoneyProductsCart)}
              </p>
            </div>
            <div className={styles["order-note"]}>
              <p>Phí vận chuyển sẽ được tính ở trang thanh toán.</p>
              <p>Ghi chú đơn hàng</p>
              <input type="text" placeholder="Ghi chú" />
              <input type="text" placeholder="Nhập mã khuyến mãi (nếu có)" />
              <Link href="/payment">
                <button className="btn-black">THANH TOÁN NGAY</button>
              </Link>
              <Link href="/products">
                <div className={styles["back"]}>
                  <span>
                    <i className="fa-solid fa-rotate-left"></i>
                  </span>
                  <p>Tiếp tục mua hàng</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
