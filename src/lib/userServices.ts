import axios from "axios";
import { privateApi } from "./woocommerce";

const userEndpoints = {
  getUsers: async () => {
    try {
      const response = await axios.get(`/api/users`);
      return response;
    } catch (error: any) {
      console.error(
        "Error fetching products:",
        error.response?.data || error.message,
      );
      return [];
    }
  },

  getUser: async (userId: string | number) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      return response;
    } catch (error: any) {
      console.error(
        "Error fetching products:",
        error.response?.data || error.message,
      );
      return [];
    }
  },

  updateUser: async (userId: string | number, body: any) => {
    try {
      const response = await axios.put(`/api/users/${userId}`, body);
      return {
        data: response.data,
      };
    } catch (error: any) {
      console.error(
        "Error fetching products:",
        error.response?.data || error.message,
      );
      return [];
    }
  },

  uploadImage: async (data: any) => {
    try {
      const response = await axios.post(`/api/media`, data);
      return response;
    } catch (error: any) {
      console.error(
        "Error uploading image:",
        error.response?.data || error.message,
      );
      return [];
    }
  },

  updateAvatar: async (url: string) => {
    try {
      const response = await privateApi.post(`/wp/v2/users/me`, {
        simple_local_avatar: url,
      });
      return response;
    } catch (error: any) {
      console.error(
        "Error uploading image:",
        error.response?.data || error.message,
      );
      return [];
    }
  },
};

export default userEndpoints;
