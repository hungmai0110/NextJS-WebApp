import React from "react";
import styles from "@styles/modal.module.scss";

interface ModalProps {
  onClose: () => void;
}
const LoginModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <>
      <div id="overlay-screen" onClick={onClose}></div>
      <div id={styles["user"]}>
        <div className={styles["user-container"]}>
          <span className={styles["close-pop-up"]} onClick={onClose}>
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
          <div className={styles["login-user"]}>
            <h5 className="text-center mb-3">ĐĂNG NHẬP</h5>
            <input type="text" placeholder="Địa chỉ email của bạn" />
            <input type="text" placeholder="Mật khẩu của bạn" />
            <button>Đăng nhập</button>
            <p className="forget-pass text-center">Quên mật khẩu?</p>
            <p className="subscribe text-center">Đăng kí</p>
          </div>
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
            <button>Đăng kí</button>
            <p className="cancel text-center">Hủy</p>
          </div>
          <div className={styles["pass-retrieval"]}>
            <h5 className="text-center mb-3">PHỤC HỒI LẠI MẬT KHẨU</h5>
            <input type="text" placeholder="Email" />
            <button>GỬI YÊU CẦU</button>
            <p className="cancel text-center">Hủy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
