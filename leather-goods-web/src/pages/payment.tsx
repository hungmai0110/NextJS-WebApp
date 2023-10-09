import React from "react";
import Link from "next/link";
import style from "@styles/pages/PaymentPage.module.scss";
import { formatMoney } from "@utils/utils";

const PaymentPage = () => {
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
    <div className="container">
      <div className={style["payment-page"]}>
        <div className={style["infor-delivery"]}>
          <h5>THÔNG TIN GIAO HÀNG</h5>
          <span>
            Bạn đã có tài khoản chưa?
            <p className="d-inline-block">Đăng nhập</p>
          </span>
          <ul className={style["form-fill"]}>
            <li>
              <input type="text" placeholder="Họ và tên" />
            </li>
            <li className="d-flex justify-content-between">
              <input
                type="email"
                className={style["email"]}
                placeholder="Email"
              />
              <input
                type="text"
                className={style["phone"]}
                placeholder="Số điện thoại"
              />
            </li>
            <li>
              <select
                className="form-select form-select-sm mb-3"
                id="city"
                aria-label=".form-select-sm"
              >
                <option value="1">Chọn tỉnh thành</option>
              </select>

              <select
                className="form-select form-select-sm mb-3"
                id="district"
                aria-label=".form-select-sm"
              >
                <option value="1">Chọn quận huyện</option>
              </select>

              <select
                className="form-select form-select-sm"
                id="ward"
                aria-label=".form-select-sm"
              >
                <option value="1">Chọn phường xã</option>
              </select>
            </li>
            <li>
              <input type="email" placeholder="Địa chỉ chi tiết" />
            </li>
            <li>
              <textarea placeholder="Ghi chú: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."></textarea>
            </li>
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/products">
              <span>
                <i className="fa-solid fa-rotate-left me-2"></i>Tiếp tục mua
                hàng
              </span>
            </Link>
            <button className={`${style["pay-now"]} btn-black`}>
              ĐẶT HÀNG
            </button>
          </div>
        </div>
        <div className={style["order-detail"]}>
          <h5 className="text-center">ĐƠN HÀNG CỦA BẠN</h5>
          <div className={style["my-order"]}>
            <div className={style["my-order-container"]}>
              <div className={style["list-cart-products"]}>
                {products.map((product: any) => (
                  <div key={product.id} className={style["mini-cart"]}>
                    <div className={style["mini-cart-detail"]}>
                      <div className={style["mini-cart-image"]}>
                        <img src={product.images[0]} alt="img" />
                      </div>
                      <div className={style["mini-cart-content"]}>
                        <p className="mb-1 fw-500">Ví Cầm Tay Da Bò</p>
                        <p className={style["initial-price"]}>
                          {formatMoney(product.price)}
                        </p>
                        <p className="promo-price">
                          {formatMoney(product.promo_price)}
                        </p>
                      </div>
                    </div>
                    <p className="text-danger fw-500 d-flex align-items-center">
                      900.000đ
                    </p>
                    <div className={style["count"]}>
                      <p>2</p>
                    </div>
                  </div>
                ))}
                <hr />
              </div>
              <div className={style["discount-code"]}>
                <input type="text" placeholder="Mã giảm giá (nếu có)" />
                <button className={`${style["btn-apply"]} btn-black`}>
                  SỬ DỤNG
                </button>
              </div>
              <hr />
              <div className="sub-total-money d-flex justify-content-between">
                <p>Tạm tính</p>
                <p>3.000.000 VNĐ</p>
              </div>
              <div className="fee-transform d-flex justify-content-between">
                <p>Phí vận chuyển</p>
                <p>0 VNĐ</p>
              </div>
              <hr />
              <div className="total-money fs-5 d-flex justify-content-between">
                <p>Tổng cộng</p>
                <p className="text-danger tottal-money-final">3.000.000 VNĐ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
