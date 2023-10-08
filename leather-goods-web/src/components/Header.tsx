import React, { useState } from "react";
import styles from "@styles/components/header.module.scss";
import Link from "next/link";
import { SearchModal, LoginModal, CartModal } from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState({
    showCartModal: false,
    showSearchModal: false,
    showLoginModal: false,
  });
  const [activeMenuItem, setActiveMenuItem] = useState("home");
  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <header className={styles["header"]}>
      <div className={`${styles["header-infor"]} color-white`}>
        <p>LUD.VN | Chuyên thiết kế & cung cấp các sản phẩm thủ công về Da</p>
        <div className={styles["header-contact"]}>
          <div className={styles["phone"]}>
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
            <p>0966516228</p>
          </div>
          <div className={styles["email"]}>
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
            <p>support@lud.vn</p>
          </div>
        </div>
      </div>
      <div className={styles["header-navbar"]}>
        <div className={`${styles["header-container"]} layout-content`}>
          <span className={styles["menu-icon"]}>
            <i className="fa-solid fa-bars"></i>
          </span>

          <div className={styles["logo"]}>
            <Link href="/" onClick={() => handleMenuItemClick("home")}>
              <img src="logo.png" alt="logo" />
            </Link>
          </div>

          <ul className={styles["list-menu"]}>
            <li className={activeMenuItem === "home" ? styles.active : ""}>
              <Link href="/" onClick={() => handleMenuItemClick("home")}>
                TRANG CHỦ
              </Link>
            </li>
            <li className={activeMenuItem === "about" ? styles.active : ""}>
              <Link href="/about" onClick={() => handleMenuItemClick("about")}>
                GIỚI THIỆU
              </Link>
            </li>
            <li
              className={`${styles["products"]} ${
                activeMenuItem === "products" ? styles.active : ""
              }`}
            >
              <Link
                href="/products"
                onClick={() => handleMenuItemClick("products")}
              >
                SẢN PHẨM
                <span>
                  <i className="fa-solid fa-caret-down"></i>
                </span>
              </Link>
              <ul className={styles["type-products"]}>
                <li>
                  <a href="./main-page/shop.html#vidanam">Ví Da Nam</a>
                </li>
                <li>
                  <a href="./main-page/shop.html#vidanu">Ví Da Nữ</a>
                </li>
                <li>
                  <a href="./main-page/shop.html#daydadongho">Dây Da Đồng Hồ</a>
                </li>
                <li>
                  <a href="./main-page/shop.html#tuidacapda">Túi Da - Cặp Da</a>
                </li>
                <li>
                  <a href="./main-page/shop.html#thatlung">Thắt Lưng</a>
                </li>
                <li>
                  <a href="./main-page/shop.html#phukien">Phụ Kiện</a>
                </li>
                <li>
                  <a href="./main-page/shop.html#cacloaibaoda">
                    Các Loại Bao Da
                  </a>
                </li>
              </ul>
            </li>
            <li className={activeMenuItem === "news" ? styles.active : ""}>
              <Link href="/news" onClick={() => handleMenuItemClick("news")}>
                TIN TỨC
              </Link>
            </li>
            <li className={activeMenuItem === "contact" ? styles.active : ""}>
              <Link
                href="/contact"
                onClick={() => handleMenuItemClick("contact")}
              >
                LIÊN HỆ
              </Link>
            </li>
          </ul>

          <div className={styles["icon-menu"]}>
            <span
              className={styles["seach-product"]}
              onClick={() =>
                setShowModal((showModal) => ({
                  ...showModal,
                  showSearchModal: true,
                }))
              }
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <span
              className={styles["user"]}
              onClick={() =>
                setShowModal((showModal) => ({
                  ...showModal,
                  showLoginModal: true,
                }))
              }
            >
              <i className="fa-solid fa-circle-user"></i>
            </span>
            <div className={styles["cart"]}>
              <span
                onClick={() =>
                  setShowModal((showModal) => ({
                    ...showModal,
                    showCartModal: true,
                  }))
                }
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span className={styles["cart-count"]}>
                <p>2</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {showModal.showCartModal && (
        <CartModal
          onClose={() =>
            setShowModal((showModal) => ({
              ...showModal,
              showCartModal: false,
            }))
          }
        />
      )}
      {showModal.showSearchModal && (
        <SearchModal
          onClose={() =>
            setShowModal((showModal) => ({
              ...showModal,
              showSearchModal: false,
            }))
          }
        />
      )}
      {showModal.showLoginModal && (
        <LoginModal
          onClose={() =>
            setShowModal((showModal) => ({
              ...showModal,
              showLoginModal: false,
            }))
          }
        />
      )}
    </header>
  );
};

export default Header;
