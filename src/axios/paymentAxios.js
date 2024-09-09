const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
import { axiosApiCall } from "./axiosHelper";

// create a payment request
export const createPayment = (totalAmount) => {
  return axiosApiCall({
    method: "post",
    url: `${API_BASE_URL}/create-payment-intent`,
    data: { totalAmount },
    isPrivate: true,
  });
};
