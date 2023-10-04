import React from "react";
import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h2>Chi tiết sản phẩm #{id}</h2>
    </div>
  );
};

export default ProductDetail;
