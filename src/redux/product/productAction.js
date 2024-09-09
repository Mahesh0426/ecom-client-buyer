import { toast } from "react-toastify";
import { getProduct, getProducts } from "../../axios/productAxios";
import { setProduct, setProducts } from "./productSlice";

// GET A PRODUCT
export const getProductAction = (slug) => async (dispatch) => {
  const result = await getProduct(slug);

  if (result?.status === "error") {
    return toast.error(result.message);
  }
  // once we have  a product then dispatch it  to store
  dispatch(setProduct(result.data));
};

// GET ALL PRODUCTS
export const getProductsAction = () => async (dispatch) => {
  const result = await getProducts();

  if (result?.status === "error") {
    return toast.error(result.message);
  }
  // once we have products then dispatch again
  dispatch(setProducts(result.data));
};
