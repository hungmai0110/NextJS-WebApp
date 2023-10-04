import React from "react";
import style from "@styles/ProductsPage.module.scss";
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
      id: 5,
      name: "Ví Gấp Nam Đánh Xi Thủ Công - 7792",
      images: [
        "https://product.hstatic.net/1000260559/product/38600874_1097633267051453_572793_6e72ec5ba4c4438bb17295e32c8d7bf2_master.jpg",
        "https://product.hstatic.net/1000260559/product/38635130_1097633127051467_3361787128689197056_o_master.jpg",
        "https://product.hstatic.net/1000260559/product/8809283558_68489761_51c5287489604b579651acaf1d380e75_master.jpg",
        "https://product.hstatic.net/1000260559/product/8773623602_68489761_9ca4e6eba22740c89107f971a96d1174_master.jpg",
        "https://product.hstatic.net/1000260559/product/38493473_1097633120384801_8958068612740939776_o_master.jpg",
      ],
      price: 350000,
      promo_price: 290000,
      discount: "-15%",
      type: "vidanam",
      gender: "male",
      tag: "bestsell",
    },
    {
      id: 6,
      name: "Ví Da Đựng Passport - 1671",
      images: [
        "https://product.hstatic.net/1000260559/product/10347784678_1445275338_7ca6d90453894b8e844813ceb93e07ce_master.jpg",
        "https://product.hstatic.net/1000260559/product/3cce84adead746e6afca797d1db8a641_e97c5389847e443dbf9bb64f64919440_master.jpg",
        "https://product.hstatic.net/1000260559/product/10321212727_1445275338_d58019884adb40aba4a84f95fe0a6e6e_master.jpg",
        "https://product.hstatic.net/1000260559/product/3cce84adead746e6afca797d1db8a641_e97c5389847e443dbf9bb64f64919440_master.jpg",
        "https://product.hstatic.net/1000260559/product/10321206765_1445275338_d8e94737b2664e09b52153e05b9c3a96_master.jpg",
      ],
      price: 400000,
      promo_price: 330000,
      discount: "-17%",
      type: "vidanam",
      gender: "male",
    },
  ];

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
                  value="Bike"
                />
                <label>Ví da nam</label>
                <br />
                <input
                  type="radio"
                  id="vehicle2"
                  name="product-portfolio"
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
                  type="radio"
                  id="price1"
                  name="filter-price"
                  value="500"
                />
                <label>Dưới 500.000đ</label>
                <br />
                <input
                  type="radio"
                  id="price2"
                  name="filter-price"
                  value="1000"
                />
                <label>500.000đ - 1.000.00đ</label>
                <br />
                <input
                  type="radio"
                  id="price3"
                  name="filter-price"
                  value="2000"
                />
                <label>1000.000đ - 2.000.00đ</label>
                <br />
                <input
                  type="radio"
                  id="price4"
                  name="filter-price"
                  value=">2000"
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
            {products.map((product:any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
