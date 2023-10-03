import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "@components/ProductCard";
import styles from "@styles/HomePage.module.scss";

const HomeListProducts = () => {
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
    <div className="container">
      <div className={styles["products-slider"]}>
        <Slider {...settings}>
          <div className={styles["card-item"]}>
            <ProductCard />
          </div>
          <div className={styles["card-item"]}>
            <ProductCard />
          </div>
          <div className={styles["card-item"]}>
            <ProductCard />
          </div>
          <div className={styles["card-item"]}>
            <ProductCard />
          </div>
          <div className={styles["card-item"]}>
            <ProductCard />
          </div>
          <div className={styles["card-item"]}>
            <ProductCard />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeListProducts;
