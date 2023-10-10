import React from "react";
import styles from "@styles/pages/ContactPage.module.scss";
import ListMiniCart from "@components/ListMiniCart";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const contact = () => {
  const validationSchema = Yup.object().shape({
    contactForName: Yup.string().required("Họ và tên không được để trống"),
    contactForPhone: Yup.string().required("Số điện thoại không được để trống"),
    contactForEmail: Yup.string()
      .email("Email không hợp lệ")
      .required("Email không được để trống"),
    Notes: Yup.string().required("Lời nhắn không được để trống"),
  });

  const initialValues = {
    contactForName: "",
    contactForPhone: "",
    contactForEmail: "",
    Notes: "",
  };

  const handleSubmit = () => {
    alert(
      "Chúng tôi đã nhận được thắc mắc của quý khách và sẽ phản hồi lại sớm nhất. Xin cảm ơn!!!"
    );
  };

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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className={styles["send-comments"]}>
                  <h5>GỬI THẮC MẮC CHO CHÚNG TÔI</h5>
                  <ul className={styles["form-fill"]}>
                    <li>
                      <label htmlFor="contactForName">Họ và tên</label>
                      <Field
                        type="text"
                        name="contactForName"
                        placeholder="Nhập tên của bạn"
                      />
                      <ErrorMessage
                        name="contactForName"
                        component="div"
                        className="error-message"
                      />
                    </li>
                    <li>
                      <label htmlFor="contactForPhone">Số điện thoại</label>
                      <Field
                        type="text"
                        name="contactForPhone"
                        placeholder="Nhập số điện thoại của bạn"
                      />
                      <ErrorMessage
                        name="contactForPhone"
                        component="div"
                        className="error-message"
                      />
                    </li>
                    <li>
                      <label htmlFor="contactForEmail">Email</label>
                      <Field
                        type="text"
                        name="contactForEmail"
                        placeholder="Nhập email của bạn"
                      />
                      <ErrorMessage
                        name="contactForEmail"
                        component="div"
                        className="error-message"
                      />
                    </li>
                    <li>
                      <label htmlFor="Notes">Lời nhắn</label>
                      <Field
                        type="text"
                        name="Notes"
                        placeholder="Nội dung..."
                      />
                      <ErrorMessage
                        name="Notes"
                        component="div"
                        className="error-message"
                      />
                    </li>
                  </ul>
                  <button
                    type="submit"
                    className={`${styles["send-us"]} btn-black`}
                  >
                    GỬI CHO CHÚNG TÔI
                  </button>
                </div>
              </Form>
            </Formik>

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
