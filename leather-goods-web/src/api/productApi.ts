import axiosClient from "./axiosClient";
import { Product } from "src/interfaces/product.interface";

const productApi = {
  get(): Promise<Product[]> {
    let url = "/products";
    return axiosClient.get(url);
  },
  add(name: string) {
    let url = "/products";
    return axiosClient.post(url, name);
  },
  getProduct(id: string) {
    let url = `/products/${id}`;
    return axiosClient.get(url);
  },
  deleteProduct(id: Number) {
    let url = `/products/${id}`;
    return axiosClient.delete(url);
  },
  editProduct(id: Number) {
    let url = `/products/${id}`;
    return axiosClient.put(url);
  },
};

export default productApi;
