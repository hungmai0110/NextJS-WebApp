import React, { useState } from "react";
import { formatMoney } from "@utils/utils";
import styles from "@styles/modal.module.scss";

interface ModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<ModalProps> = ({ onClose }) => {
  const [enteredSearch, setEnteredSearch] = useState("");

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

  return (
    <>
      <div id="overlay-screen" onClick={onClose}></div>
      <div id={styles["search-modal"]}>
        <p className="text-center my-2">TÌM KIẾM</p>
        <div className={styles["input-group"]}>
          <input
            value={enteredSearch}
            onChange={(e) => setEnteredSearch(e.target.value)}
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <button>
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </button>
        </div>
        <div className={styles["list-cart-wrapper"]}>
          <div className={styles["list-cart-products"]}>
            {products.map((product: any) => (
              <>
                <div className={styles["mini-cart-product"]} key={product.id}>
                  <div className="d-flex">
                    <div className={styles["mini-cart-product-image"]}>
                      <img src={product.images[1]} alt="1" />
                    </div>
                    <div className="mini-cart-product-content">
                      <p className="mb-2">{product.name}</p>
                      <p className="text-danger d-flex align-items-center">
                        {formatMoney(product.promo_price)}
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
