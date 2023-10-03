import React from "react";
import style from "@styles/ProductsPage.module.scss";
import ProductCard from "@components/ProductCard";

const ProductsPage = () => {
  return (
    <div className={style["products-page"]}>
      <div className={`${style["container"]} layout-content`}>
        <div className={style["filter-checkbox"]}>
          <div className={style["filter-checkbox__item"]}>
            <div className={style["title"]}>
              <p>Danh mục sản phẩm </p>
            </div>
            <div className={style["list-filter"]}>
              <form>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label>Ví da nam</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label>Ví da nữ</label>
                <br />
              </form>
            </div>
          </div>
          <div className={style["filter-checkbox__item"]}>
            <div className={style["title"]}>
              <p>Lọc giá</p>
            </div>
            <div className={style["list-filter"]}>
              <form>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label>Dưới 500.000đ</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label>500.000đ - 1.000.00đ</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label>1000.000đ - 2.000.00đ</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label>Trên 2.000.00đ</label>
                <br />
              </form>
            </div>
          </div>
        </div>
        <div className={style["filter-result"]}>
          <div className={style["result-title"]}>
            <h3>Danh sách sản phẩm</h3>
            <select>
              <option value="0">Chọn bộ lọc:</option>
              <option value="1">Sắp xếp theo tên</option>
              <option value="2">Sắp xếp theo giá tăng dần</option>
              <option value="3">Sắp xếp theo giá giảm dần</option>
            </select>
          </div>
          <div className={style["list-products"]}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
