import { toast } from "react-toastify";
import {
  getNewAccessJwt,
  getUser,
  logoutUser,
  updateUser,
} from "../../axios/userAxios";
import { setUser } from "./userSlice";
import { setCarts } from "../cart/cartSlice";

// GET USER ACTION
export const getUserAction = () => async (dispatch) => {
  const result = await getUser();

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  dispatch(setUser(result.data));
};

//UPDATE USER ACTION
export const updateUserAction = (formData) => async (dispatch) => {
  //making an API cal
  const result = await updateUser(formData);

  if (result?.status === "error") {
    return toast.error(result.message);
  }
  // update the Redux store with the new user data
  dispatch(setUser(result.data));

  return toast.success("User updated successfully.");
};

// AUTOLOGIN
export const autoLoginAction = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  if (!accessJWT && refreshJWT) {
    const result = await getNewAccessJwt();

    if (result?.status === "success") {
      sessionStorage.setItem("accessJWT", result.data);
      dispatch(getUserAction());
    }
  }

  // another endpoint saying validate access token
  // check if we have access token and if yes, dispatch get user action
  dispatch(getUserAction());
};

// Logout User
export const logoutUserAction = (email) => async (dispatch) => {
  // call api to delete session and update user's refesh token
  const result = await logoutUser(email);

  if (result?.status === "success") {
    // remove tokens from storage
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");

    // clear state
    dispatch(setUser({}));

    //clear cart items
    dispatch(setCarts([]));

    return toast.success(result.message);
  }

  return toast.error(result.message);
};
