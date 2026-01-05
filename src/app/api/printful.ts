import axios from "axios";

const printfulClient = axios.create({
  baseURL: "https://api.printful.com",
  headers: {
    Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    "Content-Type": "application/json",
  },
});

printfulClient.interceptors.response.use(
  (response) => response.data.result,
  (error) => {
    const message =
      error.response?.data?.error?.message ||
      error.message ||
      "Printful API error";
    return Promise.reject(new Error(message));
  }
);

export default printfulClient;
