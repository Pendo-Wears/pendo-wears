import axios from "axios";
import { privateApi, publicApi } from "./woocommerce";
import { SyncVariant } from "./types";

const productsEndpoint = {
  getProducts: async () => {
    try {
      // Call your serverless endpoint instead of WooCommerce
      const url = `/api/products`;
      const response = await axios.get(url);
      return {
        data: response.data,
        success: response.status === 200,
      }; // Axios wraps response in `data`
    } catch (error: any) {
      console.error(
        "Error fetching products:",
        error.response?.data || error.message
      );
      return []; // fallback empty array
    }
  },

  getWooProducts: async (queries: string="") => {
    try {
      // Call your serverless endpoint instead of WooCommerce
      const url = `/wc/store/v1/products?${queries}`;
      const response = await publicApi.get(url);
      return {
        data: response.data,
        success: response.status === 200,
      }; // Axios wraps response in `data`
    } catch (error: any) {
      console.error(
        "Error fetching products:",
        error.response?.data || error.message
      );
      return []; // fallback empty array
    }
  },

  getCategories: async () => {
    try {
      const response = await publicApi.get("/wc/store/v1/products/categories");
      return response;
    } catch (error: any) {
      console.log(
        "Error fetching products:",
        error.response?.data || error.message
      );
      return [];
    }
  },

  getTags: async () => {
    try {
      const response = await publicApi.get("/wc/store/v1/products/tags");
      return response;
    } catch (error: any) {
      console.log(
        "Error fetching products:",
        error.response?.data || error.message
      );
      return [];
    }
  },

  getCategory: async (id: number | string) => {
    try {
      const response = await publicApi.get(
        `/wc/store/v1/products/categories/${id}`
      );
      return response;
    } catch (error: any) {
      console.log(
        "Error fetching products:",
        error.response?.data || error.message
      );
      return [];
    }
  },

  getProductDetails: async (id: string | number) => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      return {
        data: response.data,
        success: response.status === 200,
      };
    } catch (error: any) {
      console.log(
        "Error fetching product details:",
        error.response?.data || error.message
      );
      return [];
    }
  },

  getPrintfulProductDetails: async (id: string | number) => {
    try {
      const response = await axios.get(`/api/printful/products/${id}`);
      return {
        data: response.data,
        success: response.status === 200,
      };
    } catch (error: any) {
      console.log(
        "Error fetching product details:",
        error.response?.data || error.message
      );
      return [];
    }
  },

  getWooProductDetails: async (id: string | number) => {
    try {
      const response = await publicApi.get(`/wc/store/v1/products/${id}`);
      return {
        data: response.data,
        success: response.status === 200,
      };
    } catch (error: any) {
      console.log(
        "Error fetching product details:",
        error.response?.data || error.message
      );
      return [];
    }
  },

  searchProducts: async (params: string) => {
    try {
      const response = await publicApi.get(`/wc/store/v1/products?${params}`);
      return response;
    } catch (error: any) {
      console.log(
        "Error searching product:",
        error.response?.data || error.message
      );
      return [];
    }
  },

  addToCart: async (
    id: number,
    quantity: number,
    variation: { attribute: string; value: string }[]
  ) => {
    try {
      const response = await privateApi.post(`/wc/store/v1/cart/add-item`, {
        id,
        quantity,
        variation,
      });
      return response.data.data;
    } catch (error: any) {
      console.log(
        "Error searching product:",
        error.response?.data || error.message
      );
      return [];
    }
  },

  removeFromCart: async (key: string) => {
    try {
      const response = await privateApi.get(
        `wc/store/v1/cart/remove-item?key=${key}`
      );
      return response.data.data;
    } catch (error: any) {
      console.log(
        "Error searching product:",
        error.response?.data || error.message
      );
      return [];
    }
  },

  getCart: async () => {
    try {
      const response = await privateApi.get(`wc/store/v1/cart`);
      return response.data.data;
    } catch (error: any) {
      console.log("Error getting cart:", error.response?.data || error.message);
      return [];
    }
  },

  getCollectionData: async () => {
    try {
      const response = await publicApi.get(
        `wc/store/v1/products/collection-data?calculate_price_range=true`
      );
      return response;
    } catch (error: any) {
      console.log("Error getting data:", error.response?.data || error.message);
      return [];
    }
  },

  createOrder: async (data: {
    userId: string;
    recipient: any;
    items: SyncVariant[];
  }) => {
    try {
      const response = await axios.post(`/api/orders`, data);
      return {
        data: response.data,
        success: response.status === 200,
        message: "Order created successfully",
      };
    } catch (error: any) {
      console.log(
        "Error creating order:",
        error.response?.data || error.message
      );
      return [];
    }
  },

  getOrders: async () => {
    try {
      const response = await axios.get(`/api/orders`);
      return {
        data: response.data,
        success: response.status === 200,
        message: "Orders fetched successfully",
      };
    } catch (error: any) {
      console.log(
        "Error fetching order:",
        error.response?.data || error.message
      );
      return [];
    }
  },

  getOrderDetails: async (id: string | number) => {
    try {
      const response = await axios.get(`/api/orders/${id}`);
      return {
        data: response.data,
        success: response.status === 200,
      };
    } catch (error: any) {
      console.log(
        "Error fetching order details:",
        error.response?.data || error.message
      );
      return [];
    }
  },
};

export { productsEndpoint };
