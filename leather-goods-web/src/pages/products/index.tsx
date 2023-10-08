import React, { useState } from "react";
import style from "@styles/pages/ProductsPage.module.scss";
import ProductCard from "@components/ProductCard";

const ProductsPage = () => {
  const products: any = [
    {
      id: 1,
      name: "Ví Kẹp Tiền Da Bò Tiện Lợi - 6352",
      images: [
        "https://product.hstatic.net/1000260559/product/vi_kep_tien_da_bo__1__77d2e5f68b9c4217bdccf11f48c6b461_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi_kep_tien_da_bo__2__29aa101be3194f1ebee136e0e47e43bf_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi_kep_tien_da_bo__3__c6cd1a054a9746efb1f4683755b2381d_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi_kep_tien_da_bo__1__77d2e5f68b9c4217bdccf11f48c6b461_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi_kep_tien_da_bo__4__df8c081ea9d344cf8b24d5d18ae9fc95_master.jpg",
      ],
      price: 500000,
      promo_price: 350000,
      discount: "-32%",
      type: "vidanam",
      gender: "male",
    },
    {
      id: 2,
      name: "Ví Da Nam Thiết Kế Độc Đáo - 3003",
      images: [
        "https://product.hstatic.net/1000260559/product/vi-da-nam-thiet-ke-doc-dao-2173003__1__86c136badc124b50ba5367b2d105e33f_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-da-nam-thiet-ke-doc-dao-2173003__4__287a71b4f4d34461a9e47f176240cac1_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-da-nam-thiet-ke-doc-dao-2173003__6__57e2a985b2df4911a8520648681246db_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-da-nam-thiet-ke-doc-dao-2173003__3__0eb167e766954c54b9f9b7ea3fe1c1eb_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-da-nam-thiet-ke-doc-dao-2173003__5__25315f44245a4c8dbcb3a30407d730fb_master.jpg",
      ],
      price: 400000,
      promo_price: 290000,
      discount: "-27%",
      type: "vidanam",
      gender: "male",
    },
    {
      id: 3,
      name: "Ví Cầm Tay, Xách Tay - 1625",
      images: [
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__6__c3fd92966a88484eaf2d56b002688a56_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__4__c497b56b724d4988875cb448da6e9c84_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__1__9964c5c4b02e41f3ae5b9473f577eee3_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__5__5335fbdcbf5f42c2a4a276f383044c4c_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-xach-tay-da-bo-nho-gon-3021625__4__c497b56b724d4988875cb448da6e9c84_master.jpg",
      ],
      price: 350000,
      promo_price: 240000,
      discount: "-30%",
      type: "vidanam",
      gender: "male",
    },
    {
      id: 4,
      name: "Ví Da Đa Năng, Hiện Đại - 1672",
      images: [
        "https://product.hstatic.net/1000260559/product/vi-da-da-nang-hien-dai-tien-loi-3021672__1__2ce7e7924f2c439099ad1b110693b501_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-da-da-nang-hien-dai-tien-loi-3021672__2__9470091b4e744b67a096293223bd588d_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-da-da-nang-hien-dai-tien-loi-3021672__3__7104f7d3e0d648e3be81a292be647cd1_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-da-da-nang-hien-dai-tien-loi-3021672__8__75ae15fd83d84635b7d45c6aff75d2e7_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-da-da-nang-hien-dai-tien-loi-3021672__7__02c22e6a42244cfc9f37d24bf227dc8b_master.jpg",
      ],
      price: 350000,
      promo_price: 215000,
      discount: "-25%",
      type: "vidanam",
      gender: "male",
      tag: "promo",
    },
    {
      id: 12,
      name: "Ví Cầm Một Khóa - 1618",
      images: [
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-nam-nu-mot-khoa-da-that-3021618__1__f77eba943b354f4eb615826b60009df6_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-nam-nu-mot-khoa-da-that-3021618__2__2499dfd2f64a4369b78878d3fa41f0d7_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-nam-nu-mot-khoa-da-that-3021618__7__d30eb75d2b764a13aec71b87a4dc6ef5_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-nam-nu-mot-khoa-da-that-3021618__3__f4ca687519cb45ba9bf9dbeb34c63ac0_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-nam-nu-mot-khoa-da-that-3021618__6__11e237c250d64beab02925bb279600d3_master.jpg",
      ],
      price: 450000,
      promo_price: 360000,
      discount: "-20%",
      type: "vidanu",
      gender: "female",
    },
    {
      id: 13,
      name: "Ví Da Cá Sấu Có Quai Chéo - 2423",
      images: [
        "https://product.hstatic.net/1000260559/product/vi_cam_tay_ca_sau__2__71c84102325442c6b9d3bb6f6defc54b_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-ca-sau-co-quai-deo-cheo-nau-dam__3__7b7eb481ff994085b031fcf1803e958c_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-ca-sau-co-quai-deo-cheo-nau-dam__7__7295acd7559442c8b6e1d3215ca5a6fc_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi-cam-tay-ca-sau-co-quai-deo-cheo-nau-dam__6__8ba8a510cfce49689362b3a735b606ec_master.jpg",
        "https://product.hstatic.net/1000260559/product/vi_cam_tay_ca_sau__5__a2a0602781854b4f91460ab5eb330e61_master.jpg",
      ],
      price: 1200000,
      promo_price: 960000,
      discount: "-27%",
      type: "vidanu",
      gender: "female",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("0");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Lọc sản phẩm theo danh mục
  const handleCategoryChange = (event: any) => {
    let selectedCategory = event.target.value;

    if (selectedCategory === "vidanam") {
      let result = products.filter((product: any) => {
        return product.type === "vidanam";
      });
      setFilteredProducts(result);
    } else if (selectedCategory === "vidanu") {
      let result = products.filter((product: any) => {
        return product.type === "vidanu";
      });
      setFilteredProducts(result);
    }
  };

  // Lọc sản phẩm theo giá
  const handlePriceChange = (event: any) => {
    let selectedPrice = event.target.value;

    if (selectedPrice === "<300") {
      let result = products.filter((product: any) => {
        return product.price < 500000;
      });
      setFilteredProducts(result);
    } else if (selectedPrice === "300-500") {
      let result = products.filter((product: any) => {
        return product.price >= 300000 && product.price <= 500000;
      });
      setFilteredProducts(result);
    } else if (selectedPrice === "500-1000") {
      let result = products.filter((product: any) => {
        return product.price >= 500000 && product.price <= 1000000;
      });
      setFilteredProducts(result);
    } else if (selectedPrice === "1000-2000") {
      let result = products.filter((product: any) => {
        return product.price >= 1000000 && product.price <= 2000000;
      });
      setFilteredProducts(result);
    }
  };

  // Lọc sản phẩm theo option
  const handleFilterChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);

    if (selectedValue === "1") {
      // Sắp xếp theo tên
      const sortedProducts = [...products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setFilteredProducts(sortedProducts);
    } else if (selectedValue === "2") {
      // Sắp xếp theo giá tăng dần
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setFilteredProducts(sortedProducts);
    } else if (selectedValue === "3") {
      // Sắp xếp theo giá giảm dần
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setFilteredProducts(sortedProducts);
    } else {
      // Hiển thị danh sách sản phẩm ban đầu
      setFilteredProducts(products);
    }
  };

  return (
    <div className={style["products-page"]}>
      <div className={`${style["container"]} layout-content`}>
        <div className={style["filter-checkbox"]}>
          <div className={style["filter-checkbox__item"]}>
            <div className={style["title"]}>
              <p>Danh mục sản phẩm</p>
            </div>
            <div className={style["list-filter"]}>
              <form>
                <input
                  type="radio"
                  id="vehicle1"
                  name="product-portfolio"
                  value="vidanam"
                  onChange={handleCategoryChange}
                />
                <label>Ví da nam</label>
                <br />
                <input
                  type="radio"
                  id="vehicle2"
                  name="product-portfolio"
                  value="vidanu"
                  onChange={handleCategoryChange}
                />
                <label>Ví da nữ</label>
                <br />
                <input
                  type="radio"
                  id="vehicle2"
                  name="product-portfolio"
                  value="vidanu"
                  onChange={handleCategoryChange}
                />
                <label>Dây Da Đồng Hồ</label>
                <br />
                <input
                  type="radio"
                  id="vehicle2"
                  name="product-portfolio"
                  value="vidanu"
                  onChange={handleCategoryChange}
                />
                <label>Túi Da - Cặp Da</label>
                <br />
                <input
                  type="radio"
                  id="vehicle2"
                  name="product-portfolio"
                  value="vidanu"
                  onChange={handleCategoryChange}
                />
                <label>Thắt Lưng</label>
                <br />
                <input
                  type="radio"
                  id="vehicle2"
                  name="product-portfolio"
                  value="vidanu"
                  onChange={handleCategoryChange}
                />
                <label>Phụ Kiện</label>
                <br />
                <input
                  type="radio"
                  id="vehicle2"
                  name="product-portfolio"
                  value="vidanu"
                  onChange={handleCategoryChange}
                />
                <label>Các Loại Bao Da</label>
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
                  type="radio"
                  id="price1"
                  name="filter-price"
                  value="<300"
                  onChange={handlePriceChange}
                />
                <label>Dưới 300.000đ</label>
                <br />
                <input
                  type="radio"
                  id="price2"
                  name="filter-price"
                  value="300-500"
                  onChange={handlePriceChange}
                />
                <label>300.000đ - 500.00đ</label>
                <br />
                <input
                  type="radio"
                  id="price3"
                  name="filter-price"
                  value="500-1000"
                  onChange={handlePriceChange}
                />
                <label>500.000đ - 1.000.00đ</label>
                <br />
                <input
                  type="radio"
                  id="price4"
                  name="filter-price"
                  value=">1000"
                  onChange={handlePriceChange}
                />
                <label>1.000.00 - 2.000.00đ</label>
                <br />
              </form>
            </div>
          </div>
        </div>
        <div className={style["filter-result"]}>
          <div className={style["result-title"]}>
            <h3>Danh sách sản phẩm</h3>
            <select value={selectedFilter} onChange={handleFilterChange}>
              <option value="0">Chọn bộ lọc:</option>
              <option value="1">Sắp xếp theo tên</option>
              <option value="2">Sắp xếp theo giá tăng dần</option>
              <option value="3">Sắp xếp theo giá giảm dần</option>
            </select>
          </div>
          <div className={style["list-products"]}>
            {filteredProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
