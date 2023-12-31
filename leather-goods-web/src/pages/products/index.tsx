import Path from "@components/Path";
import ProductCard from "@components/ProductCard";
import styles from "@styles/pages/ProductsPage.module.scss";
import { categories } from "@utils/categories";
import { priceRanges } from "@utils/priceRanges";
import { scrollToTop } from "@utils/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import productApi from "src/api/productApi";
import { Product } from "src/interfaces/product.interface";

const ProductsPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Lọc sản phẩm theo category
  const applyCategoryFilter = (category: string) => {
    const result = products.filter((product: Product) => {
      return product.type === category;
    });
    setFilteredProducts(result);
  };

  const handleCategoryChange = (event: any) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    // Add query parameter
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("category", selectedCategory);
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.pushState({}, "", newUrl);

    applyCategoryFilter(selectedCategory);
  };

  // Lọc sản phẩm theo giá
  const handlePriceChange = (event: any) => {
    const selectedPrice = event.target.value;
    setSelectedPrice(selectedPrice);
    let minPrice = 0;
    let maxPrice = Infinity;

    if (selectedPrice === "<300") {
      maxPrice = 300000;
    } else if (selectedPrice === "300-500") {
      minPrice = 300000;
      maxPrice = 500000;
    } else if (selectedPrice === "500-1000") {
      minPrice = 500000;
      maxPrice = 1000000;
    } else if (selectedPrice === "1000-2000") {
      minPrice = 1000000;
      maxPrice = 2000000;
    }

    const result = products.filter((product: Product) => {
      return product.promo_price >= minPrice && product.promo_price <= maxPrice;
    });
    setFilteredProducts(result);
  };

  // Lọc sản phẩm theo option
  const handleFilterChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);

    if (selectedValue === "1") {
      // Sắp xếp theo tên
      const sortedProducts = [...products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setFilteredProducts(sortedProducts);
    } else if (selectedValue === "2") {
      // Sắp xếp theo giá tăng dần
      const sortedProducts = [...products].sort(
        (a, b) => a.promo_price - b.promo_price
      );
      setFilteredProducts(sortedProducts);
    } else if (selectedValue === "3") {
      // Sắp xếp theo giá giảm dần
      const sortedProducts = [...products].sort(
        (a, b) => b.promo_price - a.promo_price
      );
      setFilteredProducts(sortedProducts);
    } else {
      // Hiển thị danh sách sản phẩm ban đầu
      setFilteredProducts(products);
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
    const getProducts = async () => {
      try {
        const res: Product[] = await productApi.get();
        setProducts(res);

        const { category } = router.query;
        const { gender } = router.query;
        if (category) {
          setSelectedCategory(category as string);
          applyCategoryFilter(category as string);
        } else if (gender) {
          const result = res.filter((product: Product) => {
            return product.gender === gender;
          });
          setFilteredProducts(result);
        } else {
          setFilteredProducts(res);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [router]);

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  return (
    <>
      <Path pathName="Sản phẩm" />
      <div className={styles["products-page"]}>
        <div className={`${styles["container"]} layout-content`}>
          <div className={styles["filter-checkbox"]}>
            <div className={styles["filter-checkbox__item"]}>
              <div className={styles["title"]}>
                <p>Danh mục sản phẩm</p>
              </div>
              <div className={styles["list-filter"]}>
                <form>
                  {categories.map((c) => (
                    <div key={c.id}>
                      <input
                        type="radio"
                        id="vehicle1"
                        name="product-portfolio"
                        value={c.id}
                        onChange={handleCategoryChange}
                        checked={c.id === selectedCategory}
                      />
                      <label>{c.title}</label>
                      <br />
                    </div>
                  ))}
                </form>
              </div>
            </div>
            <div className={styles["filter-checkbox__item"]}>
              <div className={styles["title"]}>
                <p>Lọc giá</p>
              </div>
              <div className={styles["list-filter"]}>
                <form>
                  {priceRanges.map((r) => (
                    <div key={r.id}>
                      <input
                        type="radio"
                        id={r.id}
                        name="filter-price"
                        value={r.value}
                        onChange={handlePriceChange}
                      />
                      <label>{r.title}</label>
                      <br />
                    </div>
                  ))}
                </form>
              </div>
            </div>
          </div>
          <div className={styles["filter-result"]}>
            <div className={styles["result-title"]}>
              <h3>Danh sách sản phẩm</h3>
              <select value={selectedFilter} onChange={handleFilterChange}>
                <option value="">Chọn bộ lọc:</option>
                <option value="1">Sắp xếp theo tên</option>
                <option value="2">Sắp xếp theo giá tăng dần</option>
                <option value="3">Sắp xếp theo giá giảm dần</option>
              </select>
              <select
                className={styles["select-sm"]}
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Danh sách sản phẩm:</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
              <select
                className={styles["select-sm"]}
                value={selectedPrice}
                onChange={handlePriceChange}
              >
                <option value="">Lọc giá:</option>
                {priceRanges.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.title}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles["list-products"]}>
              {currentProducts.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className={styles["pagination"]}>
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
    </>
  );
};

export default ProductsPage;
