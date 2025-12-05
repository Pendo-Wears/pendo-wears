import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WOO_STORE_URL}/wp-json/auth/v1`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
