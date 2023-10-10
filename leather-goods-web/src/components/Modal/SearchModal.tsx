import styles from "@styles/components/modal.module.scss";
import { formatMoney, removeDiacritics } from "@utils/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import productApi from "src/api/productApi";
import { ModalProps } from "src/interfaces/modalProps.interface";
import { Product } from "src/interfaces/product.interface";

const SearchModal: React.FC<ModalProps> = ({ onClose }) => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const res: Product[] = await productApi.get();
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    if (inputValue) {
      const normalizedSearch = removeDiacritics(inputValue.toLowerCase());
      const result = products.filter((product: Product) => {
        const normalizedProductName = removeDiacritics(
          product.name.toLowerCase()
        );
        return normalizedProductName.includes(normalizedSearch);
      });
      setFilteredProducts(result);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleClickImg = (id: number) => {
    router.push(`/products/${id}`);
    onClose();
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div id="overlay-screen" onClick={onClose}></div>
      <div id={styles["search-modal"]}>
        <h5 className="text-center fw-500 mt-3 mb-2">TÌM KIẾM</h5>
        <hr />
        <div className={styles["input-group"]}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleEnterPress}
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <button onClick={handleSearch}>
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </button>
        </div>
        {filteredProducts.length === 0 ? (
          <p className="text-center fst-italic my-2 f-italic">
            Không có sản phẩm nào...
          </p>
        ) : (
          <p className="text-center fst-italic mt-2 mb-3">
            Kết quả tìm kiếm: ({filteredProducts.length}) sản phẩm
          </p>
        )}
        <div className={styles["list-cart-wrapper"]}>
          <div className={styles["list-cart-products"]}>
            {filteredProducts.map((product: Product) => (
              <div key={product.id}>
                <div className={styles["mini-cart-product"]} key={product.id}>
                  <div className="d-flex">
                    <div className={styles["mini-cart-product-image"]}>
                      <img
                        src={product.images[1]}
                        alt="1"
                        onClick={() => {
                          handleClickImg(product.id);
                        }}
                      />
                    </div>
                    <div className="mini-cart-product-content">
                      <p className="mb-2">{product.name}</p>
                      <p className="default-price">
                        {formatMoney(product.price)}
                      </p>
                      <p className="text-danger d-flex align-items-center">
                        {formatMoney(product.promo_price)}
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
