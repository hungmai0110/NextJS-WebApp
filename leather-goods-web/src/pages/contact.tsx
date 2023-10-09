import React from "react";
import styles from "@styles/pages/ContactPage.module.scss";
import ListMiniCart from "@components/ListMiniCart";

const contact = () => {
  return (
    <div className="container">
      <div className={styles["contact-page"]}>
        <div className={styles["more-info"]}>
          <ListMiniCart />
        </div>
        <div className={styles["contact-us"]}>
          <h4>LIÊN HỆ</h4>
          <div className={styles["map-us"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7450.750367259314!2d105.8335054!3d20.977592600000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1660304944434!5m2!1svi!2s"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className={styles["contact-us-container"]}>
            <div className={styles["send-comments"]}>
              <h5>GỬI THẮC MẮC CHO CHÚNG TÔI</h5>
              <ul className={styles["form-fill"]}>
                <li>
                  <label htmlFor="contactForName">Họ và tên</label>
                  <input type="text" placeholder="Nhập tên của bạn" />
                </li>
                <li>
                  <label htmlFor="contactForPhone">Số điện thoại</label>
                  <input type="text" placeholder="Nhập số điện thoại của bạn" />
                </li>
                <li>
                  <label htmlFor="contactForEmail">Email</label>
                  <input type="email" placeholder="Nhập email của bạn" />
                </li>
                <li>
                  <label htmlFor="Notes">Lời nhắn</label>
                  <textarea placeholder="Nội dung..."></textarea>
                </li>
              </ul>
              <button className={`${styles["send-us"]} btn-black`}>
                GỬI CHO CHÚNG TÔI
              </button>
            </div>
            <div className={styles["infor-contact"]}>
              <h5>THÔNG TIN LIÊN HỆ</h5>
              <p>
                Hãy cởi bỏ gánh nặng, áp lực cuộc sống và đến với LUD để bạn
                được làm chính mình. <br />
                LUD - người bạn đồng hành tuyệt vời
              </p>
              <ul>
                <li>
                  <span>
                    <i className="fa-solid fa-location-arrow"></i>68 Định Công,
                    quận Hoàng Mai, Hà Nội
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                    support@lud.vn
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-phone"></i>0966 516 228
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-clock"></i> T2-CN, Từ 8.AM - 10.PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
