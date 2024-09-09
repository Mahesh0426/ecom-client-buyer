import { axiosApiCall } from "./axiosHelper";

// History API URL
const HISTORY_API_URL = `${
  import.meta.env.VITE_APP_API_BASE_URL
}/api/orderHistory`;

// GET ALL  History
export const getOrderHistory = () => {
  return axiosApiCall({
    method: "get",
    url: HISTORY_API_URL,
    isPrivate: true,
  });
};

// CREATE A history
export const createOrderHistory = (orderObj) => {
  return axiosApiCall({
    method: "post",
    url: HISTORY_API_URL,
    data: orderObj,
    isPrivate: true,
  });
};
