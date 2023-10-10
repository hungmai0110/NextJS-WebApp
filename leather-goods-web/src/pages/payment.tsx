import React from "react";
import Link from "next/link";
import style from "@styles/pages/PaymentPage.module.scss";
import { formatMoney } from "@utils/utils";
import { useSelector } from "react-redux";
import { CartItem } from "src/interfaces/cartItem.interface";

const PaymentPage = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);

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
                {cartItems.map((cartItem: CartItem) => (
                  <div key={cartItem.id} className={style["mini-cart"]}>
                    <div className={style["mini-cart-detail"]}>
                      <div className={style["mini-cart-image"]}>
                        <img src={cartItem.images[0]} alt="img" />
                      </div>
                      <div className={style["mini-cart-content"]}>
                        <p className="mb-1 fw-500">Ví Cầm Tay Da Bò</p>
                        <p className={style["initial-price"]}>
                          {formatMoney(cartItem.price)}
                        </p>
                        <p className="promo-price">
                          {formatMoney(cartItem.promo_price)}
                        </p>
                      </div>
                    </div>
                    <p className="text-danger fw-500 d-flex align-items-center">
                      {formatMoney(cartItem.promo_price * cartItem.quantity)}
                    </p>
                    <div className={style["count"]}>
                      <p>{cartItem.quantity}</p>
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
