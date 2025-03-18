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
    deleteEmailToReceiver: (state, action) => {
      console.log(action.payload.dbId);
      state.emailsData.forEach((emailData) => {
        if (emailData.dbId === action.payload.dbId) {
          emailData.isReceverDelete = 1;
        }
      });
    },
  },
});
export const emailActions = emailSlice.actions;
export default emailSlice.reducer;
