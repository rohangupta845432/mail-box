import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: localStorage.getItem("isLogin")
    ? localStorage.getItem("isLogin") === "true"
    : false,
  email: localStorage.getItem("email") || null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.isLogin = true;
      state.token = action.payload.token;
      localStorage.getItem("email", action.payload.email);
      localStorage.getItem("isLogin", true);
      localStorage.getItem("token", action.payload.token);
    },
    logout: (state, action) => {
      state.isLogin = false;
      state.email = null;
      state.token = null;
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.removeItem("isLogin");
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
