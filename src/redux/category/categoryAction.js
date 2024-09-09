import { getCategories } from "../../axios/categoryAxios";
import { setCategories } from "./categorySlice";
import { toast } from "react-toastify";

// GET ALL CATEGORIES
export const getCategoriesAction = () => async (dispatch) => {
  const result = await getCategories();

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  // once we have category then dispatch
  dispatch(setCategories(result.data));
};
