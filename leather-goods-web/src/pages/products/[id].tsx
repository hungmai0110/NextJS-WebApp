import { HomeBestSellProducts } from "@components/Home";
import styles from "@styles/pages/ProductDetailPage.module.scss";
import { formatMoney } from "@utils/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productApi from "src/api/productApi";
import { Product } from "src/interfaces/product.interface";
import {
  addToCart,
  decrementProduct,
  incrementProduct,
} from "src/slices/cartSlice";

const ProductDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  const { id } = router.query;
  const [product, setProduct] = useState<Product>();
  const [isShow, setIsShow] = useState({
    isShowDescription: true,
    isShowPolicy: false,
  });
  const [quantity, setQuantity] = useState(0);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleIncrement = (productId: number) => {
    if (quantity === 0) {
      dispatch(addToCart(product));
    } else {
      dispatch(incrementProduct(productId));
    }
  };

  const handleDecrement = (productId: number) => {
    if (quantity === 0) return;
    dispatch(decrementProduct(productId));
  };

  const getProductId = (id: string | undefined | string[]) => {
    const productId = Array.isArray(id) ? id[0] : id;

    return productId || 0;
  };

  const getQuantity = () => {
    const productId = getProductId(id);
    if (!productId || !cartItems) return;
    for (const item of cartItems) {
      if (item.id == productId) {
        console.log(1);
        setQuantity(item.quantity);
        return;
      }
    }
    setQuantity(0);
  };

  const getProductInfo = async () => {
    const productId = getProductId(id);
    if (!productId) return;
    try {
      const res: any = await productApi.getProduct(productId);
      setProduct(res);
      setSelectedImage(res.images[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductInfo();
  }, [id]);

  useEffect(() => {
    getQuantity();
  }, [cartItems, id]);

  return (
    <>
      <div className="container">
        <div className={styles["product-detail"]}>
          <div className={styles["product-image"]}>
            <div className={styles["selected-img"]}>
              <img src={selectedImage} />
              <div className={styles["discount"]}>
                <p>{product?.discount}</p>
              </div>
              <div className={styles["overlay-img"]}></div>
            </div>
            <div className={styles["img-gallery"]}>
              {product?.images.map((image: string, index) => (
                <div
                  key={index}
                  className={styles["img-item"]}
                  onClick={() => handleImageClick(image)}
                >
                  <img src={image} />
                  {selectedImage !== image && (
                    <div className={styles["overlay-img"]}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={styles["product-content"]}>
            <h3>{product?.name}</h3>
            <div className={styles["product-status"]}>
              <p>Tình trạng:</p>
              <p className="text-danger">Còn hàng</p>
            </div>
            <div className={styles["product-price"]}>
              <p className={`${styles["init-price"]} text-danger`}>
                {formatMoney(product?.price || 0)}
              </p>
              <p className={styles["promo-price"]}>
                {formatMoney(product?.promo_price || 0)}
              </p>
              <div className={styles["discount"]}>
                <p>{product?.discount}</p>
              </div>
            </div>
            <div className={styles["saving-money"]}>
              (Tiết kiệm
              <p className="text-danger ms-1">
                {formatMoney(product ? product.price - product.promo_price : 0)}
              </p>
              )
            </div>
            <div className={styles["promotion"]}>
              <div className={styles["title"]}>
                <span className="me-3">
                  <i className="fa-solid fa-gift"></i>
                </span>
                <p>KHUYẾN MÃI - ƯU ĐÃI</p>
              </div>
              <div className={styles["promo-content"]}>
                <ul>
                  <li>Đồng giá Ship toàn quốc 25,000đ</li>
                  <li>Miễn phí Ship cho đơn hàng từ 500,000đ</li>
                  <li>Đổi trả trong 30 ngày nếu sản phẩm lỗi</li>
                </ul>
              </div>
            </div>
            <div className={styles["add-count"]}>
              <div className={styles["change-count"]}>
                <span className="border d-inline-block me-3">
                  <span
                    className={`${styles["btn-minus-count"]} py-1 px-3 border-end d-inline-block fw-bold`}
                    onClick={() => handleDecrement(product?.id || 0)}
                  >
                    -
                  </span>
                  <span className="py-1 px-3 d-inline-block fw-bold count">
                    {quantity}
                  </span>
                  <span
                    className={`${styles["btn-plus-count"]} py-1 px-3 border-start d-inline-block fw-bold`}
                    onClick={() => handleIncrement(product?.id || 0)}
                  >
                    +
                  </span>
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <Link href="/shopping-cart">
                  <button className="btn-white me-3">XEM GIỎ HÀNG</button>
                </Link>
                <Link href="/payment">
                  <button className="btn-black">THANH TOÁN</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["product-info"]}>
          <div className={styles["title-infor"]}>
            <div className="me-3">
              <p
                onClick={() => {
                  setIsShow({
                    isShowDescription: true,
                    isShowPolicy: false,
                  });
                }}
              >
                Mô tả
              </p>
              {isShow.isShowDescription && <hr />}
            </div>
            <div>
              <p
                onClick={() => {
                  setIsShow({
                    isShowDescription: false,
                    isShowPolicy: true,
                  });
                }}
              >
                Chính sách thanh toán
              </p>
              {isShow.isShowPolicy && <hr />}
            </div>
          </div>
          <div className="content-info">
            {isShow.isShowDescription && (
              <div>
                <p>
                  Một thiết kế nhỏ nhắn, vừa tầm nắm có thể cùng bạn du hí đi
                  khắp mọi nơi mà không phải lo đồ đạc lềnh kềnh.
                </p>
                <p>
                  Là vật biểu tượng cho phong cách của bạn, thích sự đơn giản
                  hiện đại đi cùng là chất lượng tốt và được tô diểm thêm 1 chút
                  nét cổ điển.
                </p>
                <p>
                  Ví Mini Da Bò Sáp Handmade làm từ da bò được nhập khẩu từ Ý.
                  Với kích thước nhỏ gọn 8.5x11cm. Thiết kế các ngăn bên trong
                  gồm 3 ngăn đựng thẻ và 2 ngăn đựng giấy tờ.
                </p>
              </div>
            )}
            {isShow.isShowPolicy && (
              <div>
                <p>
                  Bạn có thể tham khảo các phương thức thanh toán sau đây và lựa
                  chọn áp dụng phương thức phù hợp:
                </p>
                <ul>
                  <li>
                    - Cách 1: Thanh toán trực tiếp (người mua nhận hàng tại địa
                    chỉ người bán)
                  </li>
                  <li>
                    - Cách 2: Thanh toán sau (COD – giao hàng và thu tiền tận
                    nơi)
                  </li>
                  <li>
                    - Cách 3: Thanh toán online qua thẻ tín dụng, chuyển khoản
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <HomeBestSellProducts />
    </>
  );
};

export default ProductDetail;
