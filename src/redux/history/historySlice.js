import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setOrderHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});

const { reducer: historyReducer, actions } = historySlice;

export const { setOrderHistory } = actions;
export default historyReducer;
