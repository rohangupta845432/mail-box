import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailsData: [],
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.emailsData = action.payload;
    },
    addEmail: (state, action) => {
      state.emails.push(action.payload.emailData);
    },
    deleteEmail: (state, action) => {
      state.emailsData = state.emailsData.filter(
        (emailData) => emailData.id !== action.payload.id
      );
    },
  },
});
export const emailActions = emailSlice.actions;
export default emailSlice.reducer;
