import styles from "@styles/pages/PaymentPage.module.scss";
import { formatMoney } from "@utils/utils";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "src/interfaces/cartItem.interface";

interface City {
  Id: string;
  Name: string;
  Districts: District[];
}

interface District {
  Id: string;
  Name: string;
  Wards: Ward[];
}

interface Ward {
  Id: string;
  Name: string;
}

const PaymentPage = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  const [cities, setCities] = useState<City[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);

  const totalMoneyProductsCart = cartItems.reduce(
    (total: number, p: CartItem) => {
      const itemQuantity = p.quantity ?? 0;
      return total + p.promo_price * itemQuantity;
    },
    0
  );

  const renderCities = (data: any) => {
    setCities(data);
  };

  const handleCityChange = (event: any) => {
    const selectedCityId = event.target.value;
    const selectedCity = cities.find((city) => city.Id === selectedCityId);

    if (selectedCity) {
      setDistricts(selectedCity.Districts);
      setWards([]);
    }
  };

  const handleDistrictChange = (event: any) => {
    const selectedDistrictId = event.target.value;
    const selectedDistrict = districts.find(
      (district) => district.Id === selectedDistrictId
    );

    if (selectedDistrict) {
      setWards(selectedDistrict.Wards);
    }
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Họ và tên không được bỏ trống"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email không được bỏ trống"),
    phone: Yup.string().required("Số điện thoại không được bỏ trống"),
    city: Yup.string().required("Chọn tỉnh thành"),
    district: Yup.string().required("Chọn quận huyện"),
    ward: Yup.string().required("Chọn phường xã"),
    address: Yup.string().required("Địa chỉ không được bỏ trống"),
    note: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      district: "",
      ward: "",
      address: "",
      note: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
      alert("Bạn đã đặt đơn hàng thành công!");
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
        );
        renderCities(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className={styles["payment-page"]}>
        <div className={styles["infor-delivery"]}>
          <form onSubmit={formik.handleSubmit}>
            <h5>THÔNG TIN GIAO HÀNG</h5>
            <span>
              Bạn đã có tài khoản chưa?
              <p className="d-inline-block">Đăng nhập</p>
            </span>
            <ul className={styles["form-fill"]}>
              <li>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Họ và tên"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                />
              </li>
              <li className="d-flex justify-content-between">
                <input
                  type="email"
                  className={styles["email"]}
                  placeholder="Email"
                />
                <input
                  type="text"
                  className={styles["phone"]}
                  placeholder="Số điện thoại"
                />
              </li>
              <li>
                <select
                  className="form-select form-select-sm mb-3"
                  id="city"
                  aria-label=".form-select-sm"
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleCityChange(e);
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                >
                  <option value="" selected>
                    Chọn tỉnh thành
                  </option>
                  {cities.map((city) => (
                    <option key={city.Id} value={city.Id}>
                      {city.Name}
                    </option>
                  ))}{" "}
                </select>

                <select
                  className="form-select form-select-sm mb-3"
                  id="district"
                  aria-label=".form-select-sm"
                  onChange={handleDistrictChange}
                >
                  <option value="2" selected>
                    Chọn quận huyện
                  </option>
                  {districts.map((district) => (
                    <option key={district.Id} value={district.Id}>
                      {district.Name}
                    </option>
                  ))}{" "}
                </select>

                <select
                  className="form-select form-select-sm"
                  id="ward"
                  aria-label=".form-select-sm"
                >
                  <option value="3" selected>
                    Chọn phường xã
                  </option>
                  {wards.map((ward) => (
                    <option key={ward.Id} value={ward.Id}>
                      {ward.Name}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                <input type="text" placeholder="Địa chỉ chi tiết" />
              </li>
              <li>
                <textarea placeholder="Ghi chú: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."></textarea>
              </li>
            </ul>
            <div className="d-flex justify-content-between align-items-center">
              <Link href="/products">
                <span>
                  <i className="fa-solid fa-rotate-left me-2"></i>Tiếp tục mua
                  hàng
                </span>
              </Link>
              <button
                type="submit"
                className={`${styles["pay-now"]} btn-black`}
              >
                ĐẶT HÀNG
              </button>
            </div>
          </form>
        </div>
        <div className={styles["order-detail"]}>
          <h5 className="text-center">ĐƠN HÀNG CỦA BẠN</h5>
          <div className={styles["my-order"]}>
            <div className={styles["my-order-container"]}>
              {cartItems.length === 0 && (
                <p className="text-center fst-italic">
                  Không có sản phẩm trong giỏ hàng
                </p>
              )}
              <div className={styles["list-cart-products"]}>
                {cartItems.map((cartItem: CartItem) => (
                  <div key={cartItem.id} className={styles["mini-cart"]}>
                    <div className={styles["mini-cart-detail"]}>
                      <div className={styles["mini-cart-image"]}>
                        <img src={cartItem.images[0]} alt="img" />
                      </div>
                      <div className={styles["mini-cart-content"]}>
                        <p className="mb-1 fw-500">{cartItem.name}</p>
                        <p className={styles["initial-price"]}>
                          {formatMoney(cartItem.price)}
                        </p>
                        <p className="promo-price">
                          {formatMoney(cartItem.promo_price)}
                        </p>
                      </div>
                    </div>
                    <p className={styles["total-money-product"]}>
                      {formatMoney(
                        (cartItem.quantity ?? 0) * cartItem.promo_price
                      )}
                    </p>
                    <div className={styles["count"]}>
                      <p>{cartItem.quantity}</p>
                    </div>
                  </div>
                ))}
                <hr />
              </div>
              <div className={styles["discount-code"]}>
                <input type="text" placeholder="Mã giảm giá (nếu có)" />
                <button className={`${styles["btn-apply"]} btn-black`}>
                  SỬ DỤNG
                </button>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Tạm tính</p>
                <p className="fw-500">{formatMoney(totalMoneyProductsCart)}</p>
              </div>
              <div className="fee-transform d-flex justify-content-between">
                <p>Phí vận chuyển</p>
                <p>0 VNĐ</p>
              </div>
              <hr />
              <div className="total-money fs-5 d-flex justify-content-between">
                <p>Tổng cộng</p>
                <p className="text-danger fw-500 tottal-money-final">
                  {formatMoney(totalMoneyProductsCart)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
