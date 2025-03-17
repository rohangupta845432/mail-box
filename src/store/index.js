import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import emailReducer from "./slices/email-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    email: emailReducer,
  },
});

export default store;
