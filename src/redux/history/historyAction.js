import { toast } from "react-toastify";
import { createOrderHistory, getOrderHistory } from "../../axios/historyAxios";
import { setOrderHistory } from "./historySlice";

//get all order history
export const getOrderHistoryAction = () => async (dispatch) => {
  const result = await getOrderHistory();
  console.log("gettinghistory", result);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  //Update cart items in the store
  dispatch(setOrderHistory(result.data));
};

// create a order history action
export const createOrderHistoryAction = (orderObj) => async (dispatch) => {
  const result = await createOrderHistory(orderObj);

  if (result?.status === "error") {
    return toast.error(result.message);
  }
  toast.success(result.message);

  //Update cart items in the store
  dispatch(getOrderHistoryAction());
};
