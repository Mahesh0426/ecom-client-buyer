import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";
import productReducer from "./redux/product/productSlice";
import categoryReducer from "./redux/category/categorySlice";
import cartReducer from "./redux/cart/cartSlice";
import historyReducer from "./redux/history/historySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    history: historyReducer,
  },
});

export default store;
