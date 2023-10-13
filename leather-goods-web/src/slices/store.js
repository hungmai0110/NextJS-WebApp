import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    loading: loadingReducer,
  },
});
