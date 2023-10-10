import styles from "@styles/pages/PaymentPage.module.scss";
import { formatMoney } from "@utils/utils";
import Link from "next/link";
import { useSelector } from "react-redux";
import { CartItem } from "src/interfaces/cartItem.interface";

const PaymentPage = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const totalMoneyProductsCart = cartItems.reduce(
    (total: number, p: CartItem) => {
      return total + p.promo_price * p.quantity;
    },
    0
  );

  return (
    <div className="container">
      <div className={styles["payment-page"]}>
        <div className={styles["infor-delivery"]}>
          <h5>THÔNG TIN GIAO HÀNG</h5>
          <span>
            Bạn đã có tài khoản chưa?
            <p className="d-inline-block">Đăng nhập</p>
          </span>
          <ul className={styles["form-fill"]}>
            <li>
              <input type="text" placeholder="Họ và tên" />
            </li>
            <li className="d-flex justify-content-between">
              <input
                type="email"
                className={styles["email"]}
                placeholder="Email"
              />
              <input
                type="text"
                className={styles["phone"]}
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
            <button className={`${styles["pay-now"]} btn-black`}>
              ĐẶT HÀNG
            </button>
          </div>
        </div>
        <div className={styles["order-detail"]}>
          <h5 className="text-center">ĐƠN HÀNG CỦA BẠN</h5>
          <div className={styles["my-order"]}>
            <div className={styles["my-order-container"]}>
              {cartItems.length === 0 && (
                <p className="text-center fst-italic">
                  Không có sản phẩm trong giỏ hàng
                </p>
              )}
              <div className={styles["list-cart-products"]}>
                {cartItems.map((cartItem: CartItem) => (
                  <div key={cartItem.id} className={styles["mini-cart"]}>
                    <div className={styles["mini-cart-detail"]}>
                      <div className={styles["mini-cart-image"]}>
                        <img src={cartItem.images[0]} alt="img" />
                      </div>
                      <div className={styles["mini-cart-content"]}>
                        <p className="mb-1 fw-500">{cartItem.name}</p>
                        <p className={styles["initial-price"]}>
                          {formatMoney(cartItem.price)}
                        </p>
                        <p className="promo-price">
                          {formatMoney(cartItem.promo_price)}
                        </p>
                      </div>
                    </div>
                    <p className={styles["total-money-product"]}>
                      {formatMoney(cartItem.promo_price * cartItem.quantity)}
                    </p>
                    <div className={styles["count"]}>
                      <p>{cartItem.quantity}</p>
                    </div>
                  </div>
                ))}
                <hr />
              </div>
              <div className={styles["discount-code"]}>
                <input type="text" placeholder="Mã giảm giá (nếu có)" />
                <button className={`${styles["btn-apply"]} btn-black`}>
                  SỬ DỤNG
                </button>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Tạm tính</p>
                <p className="fw-500">{formatMoney(totalMoneyProductsCart)}</p>
              </div>
              <div className="fee-transform d-flex justify-content-between">
                <p>Phí vận chuyển</p>
                <p>0 VNĐ</p>
              </div>
              <hr />
              <div className="total-money fs-5 d-flex justify-content-between">
                <p>Tổng cộng</p>
                <p className="text-danger fw-500 tottal-money-final">
                  {formatMoney(totalMoneyProductsCart)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
