import styles from "@styles/components/ListMiniCart.module.scss";
import { formatMoney } from "@utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import productApi from "src/api/productApi";
import { Product } from "src/interfaces/product.interface";

const ListMiniCart = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const res: Product[] = await productApi.get();
      const result = res.filter((p) => p.id === 3 || p.id === 11);
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles["total-list"]}>
      <div className={styles["list-mini-cart"]}>
        <p className={styles["title"]}>Sản phẩm bán chạy</p>
        <div className={styles["list-item"]}>
          {products.map((product: any) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className={styles["mini-item"]}>
                <div className={styles["mini-item-image"]}>
                  <img src={product.images[0]} alt="img" />
                </div>
                <div className={styles["mini-item-content"]}>
                  <p>{product.name}</p>
                  <p className="default-price">{formatMoney(product.price)}</p>
                  <p>{formatMoney(product.promo_price)}</p>
                </div>
              </div>
            </Link>
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
                <p>100+ STT Chúc Người Thân Thương Giáng Sinh 2022</p>
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
