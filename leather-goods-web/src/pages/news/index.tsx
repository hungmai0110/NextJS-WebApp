import React from "react";
import styles from "@styles/pages/NewsPage.module.scss";
import ListMiniCart from "@components/ListMiniCart";
import Link from "next/link";

const NewsPage = () => {
  const listNews = [
    {
      image: "/more_infor/news_1.jpeg",
      title: "100+ STT Chúc Người Thân, Người Thương Giáng sinh hay nhất 2022",
      time: "24/12/2022",
    },
    {
      image: "/more_infor/bag.jpg",
      title: "Tìm hiểu các bước làm ra một chiếc cặp da nam",
      time: "15/06/2022",
    },
    {
      image: "/more_infor/apple_watch.jpg",
      title: "Hướng dẫn sử dụng sản phẩm da cá sấu tại nhà",
      time: "27/05/2022",
    },
    {
      image: "/more_infor/bag.jpg",
      title: "Tìm hiểu các bước làm ra một chiếc cặp da nam",
      time: "12/06/2022",
    },
    {
      image: "/more_infor/apple_watch.jpg",
      title: "Hướng dẫn sử dụng sản phẩm da cá sấu tại nhà",
      time: "01/05/2022",
    },
    {
      image: "/more_infor/bag.jpg",
      title: "Tìm hiểu các bước làm ra một chiếc cặp da nam",
      time: "02/03/2022",
    },
  ];

  return (
    <div className="container">
      <div className={styles["news-page"]}>
        <div className={styles["more-info"]}>
          <ListMiniCart />
        </div>
        <div className={styles["list-news"]}>
          <h4>TIN TỨC</h4>
          <div className={styles["list-news-container"]}>
            {listNews.map((item) => (
              <div key={item.time} className={styles["news-item"]}>
                <Link href={`/news/${encodeURIComponent(item.title)}`}>
                  <img src={item.image} alt="img" />
                  <div className={styles["news-content"]}>
                    <p className="fw-500 mb-3">{item.title}</p>
                    <p className={styles["timer"]}>{item.time}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
