import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import styles from "@styles/pages/AdminPage.module.scss";
import { scrollToTop } from "@utils/utils";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productApi from "src/api/productApi";
import { Product } from "src/interfaces/product.interface";
import { deleteProductSuccess } from "src/slices/cartSlice";

const AdminPage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const isConfirmDeleteProduct = useSelector(
    (state: any) => state.cart.isDeleteProductSuccess.confirm
  );

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleOpenModal = (id: any) => {
    dispatch(deleteProductSuccess({ isShow: true, id: id }));
  };

  const getProducts = async () => {
    try {
      const res: Product[] = await productApi.get();
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };

  // Phân trang
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageNumber = (i: any) => {
    setCurrentPage(i);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => handlePageNumber(i)}
          className={
            currentPage === i
              ? `${styles.active} ${styles["page-number"]}`
              : styles["page-number"]
          }
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  useEffect(() => {
    getProducts();
  }, [isConfirmDeleteProduct]);

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  return (
    <div className="container">
      <div className="layout-content">
        <div className={styles["admin-page"]}>
          <div className={styles["dashboard"]}>
            <div className={styles["title"]}>
              <img src="logo.png" alt="logo" />
              <h5>LUD Admin</h5>
            </div>
            <ul>
              <li className={styles["active"]}>Sản phẩm</li>
              <li>Đơn hàng</li>
            </ul>
          </div>
          <div className={styles["content"]}>
            <h5>Danh sách sản phẩm</h5>
            <Table aria-label="table">
              <TableHeader>
                <TableColumn className={styles["product-img-col"]}>
                  Ảnh
                </TableColumn>
                <TableColumn className={styles["product-name-col"]}>
                  Tên sản phẩm
                </TableColumn>
                <TableColumn className={styles["block-border__right"]}>
                  Sửa
                </TableColumn>
                <TableColumn>Xoá</TableColumn>
              </TableHeader>
              <TableBody>
                {currentProducts.map((p) => (
                  <TableRow key={p.id} className={styles["table-row"]}>
                    <TableCell
                      className={`${styles["block-border__right"]} d-flex justify-content-center`}
                    >
                      <img src={p.images[0]} alt="img" />
                    </TableCell>
                    <TableCell className={styles["block-border__right"]}>
                      {p.name}
                    </TableCell>
                    <TableCell
                      className={`${styles["block-border__right"]} text-center`}
                    >
                      <span>
                        <i className="fa-regular fa-pen-to-square"></i>
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span onClick={() => handleOpenModal(p.id)}>
                        <i className="fa-solid fa-trash-can"></i>
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className={styles["pagination"]}>
              <div className={styles["pagination__container"]}>
                <button
                  className="me-2"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <i className="fa-solid fa-angles-left"></i>
                </button>
                <div className={styles["list-page"]}>{renderPageNumbers()}</div>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  <i className="fa-solid fa-angles-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
