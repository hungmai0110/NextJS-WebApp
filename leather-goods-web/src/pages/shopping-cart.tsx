import Path from "@components/Path";
import styles from "@styles/pages/ShoppingCartPage.module.scss";
import { formatMoney } from "@utils/utils";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "src/interfaces/cartItem.interface";
import {
  decrementProduct,
  incrementProduct,
  removeToCart,
} from "src/slices/cartSlice";

const ShoppingCartPage = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalMoneyProductsCart = cartItems.reduce(
    (total: number, p: CartItem) => {
      const itemQuantity = p.quantity ?? 0;
      return total + p.promo_price * itemQuantity;
    },
    0
  );

  const handleIncrement = (productId: number) => {
    dispatch(incrementProduct(productId));
  };

  const handleDecrement = (productId: number) => {
    dispatch(decrementProduct(productId));
  };

  const handleDeleteCart = (productId: number) => {
    dispatch(removeToCart(productId));
  };

  return (
    <>
      <Path pathName="Giỏ hàng" />
      <div className="container">
        <div className={styles["shopping-cart"]}>
          <div className={styles["cart-info"]}>
            <div className={styles["title"]}>
              <h4>Giỏ hàng</h4>
              <span>
                Số lượng:
                <p className="text-danger fw-bold">{cartItems.length}</p> sản
                phẩm
              </span>
            </div>
            {cartItems.length === 0 && (
              <p className="text-center fst-italic">
                Không có sản phẩm trong giỏ hàng
              </p>
            )}
            <div className={styles["list-cart-items"]}>
              {cartItems.map((cartItem: CartItem) => (
                <div key={cartItem.id} className={styles["cart-item"]}>
                  <div className={styles["mini-cart"]}>
                    <div className={styles["product-img"]}>
                      <img src={cartItem.images[0]} alt="img" />
                    </div>
                    <div className={styles["product-content"]}>
                      <p>{cartItem.name}</p>
                      <p>{formatMoney(cartItem.price)}</p>
                      <p>{formatMoney(cartItem.promo_price)}</p>
                      <span onClick={() => handleDeleteCart(cartItem.id)}>
                        <i className="fa-solid fa-trash-can"></i>
                      </span>
                      <div className={styles["change-count-sm"]}>
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
                  </div>
                  <div className={styles["change-count-pc"]}>
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
                  <p className="text-danger">
                    {formatMoney(
                      (cartItem.quantity ?? 0) * cartItem.promo_price
                    )}
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
    </>
  );
};

export default ShoppingCartPage;
