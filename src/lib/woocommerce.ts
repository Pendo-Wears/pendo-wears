import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from "axios";

const privateApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WOO_STORE_URL}/wp-json`,
});

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const publicApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WOO_STORE_URL}/wp-json`,
});

export { privateApi, publicApi };
