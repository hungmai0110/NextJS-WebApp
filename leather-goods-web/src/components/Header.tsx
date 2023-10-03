import React from "react";
import styles from "@styles/header.module.scss";
import Link from "next/link";

const Header = () => {
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
            <Link href="/">
              <img src="logo.png" alt="logo" />
            </Link>
          </div>

          <ul className={styles["list-menu"]}>
            <li>
              <Link href="/">TRANG CHỦ</Link>
            </li>
            <li>
              <Link href="/about">GIỚI THIỆU</Link>
            </li>
            <li className={styles["products"]}>
              <Link href="/products">
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
            <li>
              <Link href="/tin-tuc">TIN TỨC</Link>
            </li>
            <li>
              <Link href="/lien-he">LIÊN HỆ</Link>
            </li>
          </ul>

          <div className={styles["icon-menu"]}>
            <span className={styles["seach-product"]}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <span className={styles["user"]}>
              <i className="fa-solid fa-circle-user"></i>
            </span>
            <div className={styles["cart"]}>
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span className={styles["cart-count"]}>
                <p>2</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
