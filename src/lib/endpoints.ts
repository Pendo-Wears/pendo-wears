import api from "./woocommerce";

const productsEndpoint = {
  getProducts: async () => {
    try {
      const response = await api.get("products");
      return response.data.data;
    } catch (error: any) {
      console.log(
        "Error fetching products:",
        error.response?.data || error.message
      );
      return [];
    }
  },
};

export { productsEndpoint };
