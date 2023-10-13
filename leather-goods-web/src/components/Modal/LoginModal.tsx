import styles from "@styles/components/modal.module.scss";
import React, { useState } from "react";
import { ModalProps } from "src/interfaces/modalProps.interface";

const LoginModal: React.FC<ModalProps> = ({ onClose }) => {
  const [isShow, setIsShow] = useState({
    isShowLogin: true,
    isShowSubscribe: false,
    isShowForgetPass: false,
  });

  const handleShowSubscribeForm = () => {
    setIsShow({
      isShowLogin: false,
      isShowSubscribe: true,
      isShowForgetPass: false,
    });
  };

  const handleShowLoginForm = () => {
    setIsShow({
      isShowLogin: true,
      isShowSubscribe: false,
      isShowForgetPass: false,
    });
  };

  const handleShowForgetPassForm = () => {
    setIsShow({
      isShowLogin: false,
      isShowSubscribe: false,
      isShowForgetPass: true,
    });
  };

  return (
    <>
      <div id="overlay-screen" onClick={onClose}></div>
      <div className={`${styles["user-modal"]} ${styles["modal"]}`}>
        <div className={styles["container"]}>
          <span className={styles["close-pop-up"]} onClick={onClose}>
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
          {isShow.isShowLogin && (
            <div className={styles["login-user"]}>
              <h5 className="text-center mb-3">ĐĂNG NHẬP</h5>
              <input type="text" placeholder="Địa chỉ email của bạn" />
              <input type="text" placeholder="Mật khẩu của bạn" />
              <button className="btn-black">Đăng nhập</button>
              <p
                className="forget-pass text-center"
                onClick={handleShowForgetPassForm}
              >
                Quên mật khẩu?
              </p>
              <p
                className="subscribe text-center"
                onClick={handleShowSubscribeForm}
              >
                Đăng kí
              </p>
            </div>
          )}

          {isShow.isShowSubscribe && (
            <div className={styles["subscribe-user"]}>
              <h5 className="text-center mb-3">ĐĂNG KÍ TÀI KHOẢN</h5>
              <input type="text" placeholder="Họ và tên" id="name" />
              <input type="text" placeholder="Email" id="email" />
              <input type="text" placeholder="Số điện thoại" id="phone" />
              <input type="text" placeholder="Mật khẩu" id="password" />
              <input
                type="text"
                placeholder="Xác nhận lại mật khẩu"
                id="confirm-password"
              />
              <button className="btn-black">Đăng kí</button>
              <p className="cancel text-center" onClick={handleShowLoginForm}>
                Hủy
              </p>
            </div>
          )}

          {isShow.isShowForgetPass && (
            <div className={styles["pass-retrieval"]}>
              <h5 className="text-center mb-3">PHỤC HỒI LẠI MẬT KHẨU</h5>
              <input type="text" placeholder="Email" />
              <button className="btn-black">GỬI YÊU CẦU</button>
              <p className="cancel text-center" onClick={handleShowLoginForm}>
                Hủy
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginModal;
