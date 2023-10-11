import React from "react";
import styles from "@styles/pages/HomePage.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const HomeMoreInfo = () => {
  const settingsNews = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const settingsFeedBacks = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <div id={styles["more-infor"]}>
      <div className={`${styles["more-infor-container"]} layout-content`}>
        <h2>Bạn có biết?</h2>
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="news">
              <div className={styles["news-slider"]}>
                <Slider {...settingsNews}>
                  <Link
                    href={`/news/${encodeURIComponent(
                      "100+ STT Chúc Người Thân, Người Thương Giáng sinh hay nhất 2022"
                    )}`}
                  >
                    <div className={styles["news-item"]}>
                      <img src="/more_infor/news_1.jpeg" alt="img" />
                      <p>
                        100+ STT Chúc Người Thân, Người Thương Giáng sinh hay
                        nhất 2022
                      </p>
                    </div>
                  </Link>
                  <Link
                    href={`/news/${encodeURIComponent(
                      "100+ STT Chúc Người Thân, Người Thương Giáng sinh hay nhất 2022"
                    )}`}
                  >
                    <div className={styles["news-item"]}>
                      <img src="/more_infor/bag.jpg" alt="cap da" />
                      <p>Tìm hiểu các bước làm ra một chiếc cặp da nam sẽ như thế nào?</p>
                    </div>
                  </Link>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={styles["feedback"]}>
              <div className={styles["feedback-slider"]}>
                <Slider {...settingsFeedBacks}>
                  <div className={`${styles["feedback-item"]} text-center`}>
                    <div className={styles["feedback-avatar"]}>
                      <img src="/more_infor/avatar_1.jpg" alt="1" />
                    </div>
                    <div
                      className={`${styles["rate"]} d-flex justify-content-center my-2`}
                    >
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className={`${styles["user-name"]} mb-2`}>Hà Lan</p>
                    <p className="fst-italic">
                      Tư vấn nhiệt tình, rất nhiều sản phẩm đẹp, sẽ ủng hộ lâu
                      dài!
                    </p>
                  </div>
                  <div className={`${styles["feedback-item"]} text-center`}>
                    <div className={styles["feedback-avatar"]}>
                      <img src="/more_infor/avatar_2.jpeg" alt="2" />
                    </div>
                    <div
                      className={`${styles["rate"]} d-flex justify-content-center my-2`}
                    >
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className={`${styles["user-name"]} mb-2`}>Bon Bon</p>
                    <p className="fst-italic">
                      Đồ da cao cấp, giá hợp lý. Sẽ ủng hộ shop lâu dài
                    </p>
                  </div>
                  <div className={`${styles["feedback-item"]} text-center`}>
                    <div className={styles["feedback-avatar"]}>
                      <img src="/more_infor/avatar_3.jpg" alt="3" />
                    </div>
                    <div
                      className={`${styles["rate"]} d-flex justify-content-center my-2`}
                    >
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className={`${styles["user-name"]} mb-2`}>Điêu Thuyền</p>
                    <p className="fst-italic">
                      Giá hợp lý, giao hàng nhanh. Chủ shop dễ thương!
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMoreInfo;
