import { axiosApiCall } from "./axiosHelper";

// USER API URL
const CATEGORY_API_URL = `${
  import.meta.env.VITE_APP_API_BASE_URL
}/api/category`;

// PUBLIC ROUTE
// GET ALL CATEGORIES
export const getCategories = () => {
  return axiosApiCall({
    method: "get",
    url: CATEGORY_API_URL,
  });
};
