import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  username: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      const { username, email } = action.payload;
      state.username = username;
      state.email = email;
    },
    refreshInfo: (state) => {
      state.username = "";
      state.email = "";
    },
  },
});
export const { setInfo, refreshInfo } = userSlice.actions;
export default userSlice.reducer;
export const selectCurrentEmail = (state) => state.user.email;
export const selectCurrentUsername = (state) => state.user.username;
