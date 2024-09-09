import { toast } from "react-toastify";
import { getProductAction } from "../product/productAction";
import {
  createCart,
  deleteCartItems,
  getCartItems,
  updateCartItems,
} from "../../axios/cartAxios";
import { removeCartItem, setCarts } from "./cartSlice";

// get all cart items

export const getCartItemsAction = () => async (dispatch) => {
  const result = await getCartItems();

  // Check if there are no cart items
  if (result.data.length === 0) {
    return;
  }

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  //dispatch to update the Redux store with the cart items
  dispatch(setCarts(result.data));
};

// create a new cart

export const createCartAction = (cartObj) => async (dispatch) => {
  const result = await createCart(cartObj);

  if (result?.status === "error") {
    return toast.error(result.message);
  }
  toast.success(result.message);

  //Update cart items in the store
  dispatch(getCartItemsAction());

  //  Update product details
  dispatch(getProductAction(product_id));
};

// update cart
export const updateCartItemAction = (cartObj) => async (dispatch) => {
  const result = await updateCartItems(cartObj);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  // Update cart items in the store
  dispatch(getCartItemsAction());

  // once a cart is updated, we get product details again
  dispatch(getProductAction(product_id));
};

// delete cart
export const deleteCartItemAction = (cartId) => async (dispatch) => {
  const result = await deleteCartItems(cartId);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success(result.message);
  dispatch(getCartItemsAction());

  // Remove item from the Redux store
  dispatch(removeCartItem(cartId));
};
