import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "@components/ProductCard";
import styles from "@styles/pages/HomePage.module.scss";
import { Product } from "src/interfaces/product.interface";

const HomeListProducts = ({ products }: { products: Product[] }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="layout-content">
      <div className={styles["products-slider"]}>
        <Slider {...settings}>
          {products.map((product: Product) => (
            <div key={product.id} className={styles["card-item"]}>
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeListProducts;
