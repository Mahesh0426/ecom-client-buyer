import { axiosApiCall } from "./axiosHelper";

// USER API URL
const USER_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/user`;

//public Route
//Create User
export const createUser = (userObj) => {
  return axiosApiCall({
    method: "post",
    url: USER_API_URL,
    data: userObj,
  });
};

// Public | Verify User email
export const verifyUser = (verificationObj) => {
  return axiosApiCall({
    method: "patch",
    url: `${USER_API_URL}/verify-email`,
    data: verificationObj,
  });
};

// Publci | Login User
export const loginUser = (loginData) => {
  return axiosApiCall({
    method: "post",
    url: `${USER_API_URL}/login`,
    data: loginData,
  });
};

//update user || private
export const updateUser = (userData) => {
  return axiosApiCall({
    method: "patch",
    url: USER_API_URL,
    data: userData,
    isPrivate: true,
  });
};

// Get user  | private
export const getUser = () => {
  return axiosApiCall({
    method: "get",
    url: USER_API_URL,
    isPrivate: true,
  });
};

// Get new access token using refresh token
export const getNewAccessJwt = () => {
  return axiosApiCall({
    method: "get",
    url: `${USER_API_URL}/accessjwt`,
    isPrivate: true,
    useRefreshToken: true,
  });
};

//LOGOUT USER
export const logoutUser = (email) => {
  return axiosApiCall({
    method: "post",
    url: `${USER_API_URL}/logout`,
    data: { email },
    isPrivate: true,
  });
};

//reset password email
export const resetPasswordEmail = (formData) => {
  return axiosApiCall({
    method: "post",
    url: `${USER_API_URL}/forget-password`,
    data: formData,
  });
};

//chage password
export const changePassword = (data) => {
  console.log(data);
  return axiosApiCall({
    method: "patch",
    url: `${USER_API_URL}/change-password`,
    data: data,
  });
};
