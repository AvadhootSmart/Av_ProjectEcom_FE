import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    GoogleLoginSuccess(state) {
      state.isAuthenticated = true;
    },
  },
});

export const { loginSuccess, logoutSuccess, GoogleLoginSuccess } = authSlice.actions;
export default authSlice.reducer;
