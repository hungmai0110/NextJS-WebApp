import axiosClient from "./axiosClient";
import { Product } from "src/interfaces/product.interface";

const productApi = {
  get(): Promise<Product[]> {
    let url = "/products";
    return axiosClient.get(url);
  },
  add(data: Product) {
    let url = "/products";
    return axiosClient.post(url, data);
  },
  getProduct(id: string) {
    let url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
