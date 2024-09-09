import { axiosApiCall } from "./axiosHelper";

// PRODUCT API URL
const PRODUCT_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/product`;

// GET A PRODUCT
export const getProduct = (slug) => {
  return axiosApiCall({
    method: "get",
    url: `${PRODUCT_API_URL}/${slug}`,
  });
};

// GET ALL PRODUCTS
export const getProducts = () => {
  return axiosApiCall({
    method: "get",
    url: PRODUCT_API_URL,
  });
};
