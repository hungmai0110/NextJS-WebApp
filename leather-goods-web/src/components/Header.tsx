import styles from "@styles/components/header.module.scss";
import { categories } from "@utils/categories";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initCart } from "src/slices/cartSlice";
import {
  AddCartSuccessModal,
  CartModal,
  LoginModal,
  SearchModal,
} from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState({
    showCartModal: false,
    showSearchModal: false,
    showLoginModal: false,
  });
  const router = useRouter();
  const trailingSlash = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const isShowSuccess = useSelector(
    (state: any) => state.cart.isAddCartSuccess.isShow
  );

  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const cartItemsFromStorage = localStorage.getItem("cartItems");
    if (cartItemsFromStorage) {
      dispatch(initCart(JSON.parse(cartItemsFromStorage)));
    }
  }, [dispatch]);

  return (
    <header className={styles["header"]}>
      <div className={`${styles["header-infor"]} color-white`}>
        <p className={styles["content-pc"]}>
          LUD.VN | Chuyên thiết kế & cung cấp các sản phẩm thủ công về Da
        </p>
        <p className={styles["content-sm"]}>
          LUD.VN | Chuyên thiết kế & cung cấp các sản phẩm thủ công về Da
        </p>
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
          <span className={styles["menu-icon"]} onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </span>
          {isMenuOpen && (
            <>
              <span className={styles["close-menu-sm"]} onClick={toggleMenu}>
                <i className="fa-regular fa-rectangle-xmark"></i>
              </span>
              <ul className={styles["list-menu-sm"]}>
                <li>
                  <Link
                    href="/"
                    className={trailingSlash === "/" ? styles["active-sm"] : ""}
                    onClick={toggleMenu}
                  >
                    TRANG CHỦ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={
                      trailingSlash === "/about" ? styles["active-sm"] : ""
                    }
                    onClick={toggleMenu}
                  >
                    GIỚI THIỆU
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className={`${styles["products"]} ${
                      trailingSlash === "/products" ? styles["active-sm"] : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    SẢN PHẨM
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className={
                      trailingSlash === "/news" ? styles["active-sm"] : ""
                    }
                    onClick={toggleMenu}
                  >
                    TIN TỨC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={
                      trailingSlash === "/contact" ? styles["active-sm"] : ""
                    }
                    onClick={toggleMenu}
                  >
                    LIÊN HỆ
                  </Link>
                </li>
              </ul>
              <div id="overlay-screen" onClick={toggleMenu}></div>
            </>
          )}

          <div className={styles["logo"]}>
            <Link href="/">
              <img src="logo.png" alt="logo" />
            </Link>
          </div>

          <ul className={styles["list-menu"]}>
            <li className={trailingSlash === "/" ? styles.active : ""}>
              <Link href="/">TRANG CHỦ</Link>
            </li>
            <li className={trailingSlash === "/about" ? styles.active : ""}>
              <Link href="/about">GIỚI THIỆU</Link>
            </li>
            <li
              className={`${styles["products"]} ${
                trailingSlash === "/products" ? styles.active : ""
              }`}
            >
              <Link href="/products">
                SẢN PHẨM
                <span>
                  <i className="fa-solid fa-caret-down"></i>
                </span>
              </Link>
              <ul className={styles["type-products"]}>
                {categories.map((c) => (
                  <li key={c.id}>
                    <a href={`/products?category=${c.id}`}>{c.title}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li className={trailingSlash === "/news" ? styles.active : ""}>
              <Link href="/news">TIN TỨC</Link>
            </li>
            <li className={trailingSlash === "/contact" ? styles.active : ""}>
              <Link href="/contact">LIÊN HỆ</Link>
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
                <p>{cartItems.length}</p>
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
      {isShowSuccess && <AddCartSuccessModal />}
    </header>
  );
};

export default Header;
