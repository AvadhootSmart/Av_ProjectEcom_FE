import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartSlice,
  },
});

export default store;
