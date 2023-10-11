import React from "react";
import styles from "@styles/components/ListMiniCart.module.scss";
import { formatMoney } from "@utils/utils";
import Link from "next/link";

const ListMiniCart = () => {
  const products: any = [
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
      id: 12,
      name: "Ví Cầm Một Khóa - 1618",
      images: [
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-nam-nu-mot-khoa-da-that-3021618__1__f77eba943b354f4eb615826b60009df6_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-nam-nu-mot-khoa-da-that-3021618__2__2499dfd2f64a4369b78878d3fa41f0d7_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-nam-nu-mot-khoa-da-that-3021618__7__d30eb75d2b764a13aec71b87a4dc6ef5_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-nam-nu-mot-khoa-da-that-3021618__3__f4ca687519cb45ba9bf9dbeb34c63ac0_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-nam-nu-mot-khoa-da-that-3021618__6__11e237c250d64beab02925bb279600d3_master.jpg",
      ],
      price: 450000,
      promo_price: 360000,
      discount: "-20%",
      type: "vidanu",
      gender: "female",
    },
  ];

  return (
    <div className={styles["total-list"]}>
      <div className={styles["list-mini-cart"]}>
        <p className={styles["title"]}>Sản phẩm bán chạy</p>
        <div className={styles["list-item"]}>
          {products.map((product: any) => (
            <div key={product.id} className={styles["mini-item"]}>
              <div className={styles["mini-item-image"]}>
                <img src={product.images[0]} alt="img" />
              </div>
              <div className={styles["mini-item-content"]}>
                <p>{product.name}</p>
                <p className="default-price">{formatMoney(product.price)}</p>
                <p>{formatMoney(product.promo_price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles["list-mini-cart"]}>
        <p className={styles["title"]}>Bài viết mới nhất</p>
        <div className={styles["list-item"]}>
          <Link
            href={`/news/${encodeURIComponent(
              "100+ STT Chúc Người Thân, Người Thương Giáng sinh hay nhất 2022"
            )}`}
          >
            <div className={styles["mini-item"]}>
              <div className={styles["mini-item-image"]}>
                <img src="/more_infor/news_1.jpeg" alt="img" />
              </div>
              <div className="mini-item-content">
                <p>
                  100+ STT Chúc Người Thân, Người Thương Giáng sinh hay nhất
                  2022
                </p>
              </div>
            </div>
          </Link>

          <Link
            href={`/news/${encodeURIComponent(
              "100+ STT Chúc Người Thân, Người Thương Giáng sinh hay nhất 2022"
            )}`}
          >
            <div className={styles["mini-item"]}>
              <div className={styles["mini-item-image"]}>
                <img src="/more_infor/bag.jpg" alt="img" />
              </div>
              <div className="mini-item-content">
                <p>Tìm hiểu các bước làm ra một chiếc cặp da nam</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListMiniCart;
