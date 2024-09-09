import { axiosApiCall } from "./axiosHelper";

// Cart API URL
const CART_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/addtocart`;

// CREATE A CART
export const createCart = (cartObj) => {
  return axiosApiCall({
    method: "post",
    url: CART_API_URL,
    data: cartObj,
    isPrivate: true,
  });
};

// GET CART
export const getCartItems = () => {
  return axiosApiCall({
    method: "get",
    url: CART_API_URL,
    isPrivate: true,
  });
};
// update cart items
export const updateCartItems = (cartObj) => {
  return axiosApiCall({
    method: "patch",
    url: CART_API_URL,
    data: cartObj,
    isPrivate: true,
  });
};

// delete cart items
export const deleteCartItems = (cartId) => {
  return axiosApiCall({
    method: "delete",
    url: `${CART_API_URL}/${cartId}`,
    isPrivate: true,
  });
};
