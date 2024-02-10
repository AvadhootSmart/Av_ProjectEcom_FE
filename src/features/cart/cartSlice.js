import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: 0,
  },
  reducers: {
    totalPrice(state, action) {
      state.totalPrice = action.payload;
    },
  },
});

export const { totalPrice } = cartSlice.actions;
export default cartSlice.reducer;
