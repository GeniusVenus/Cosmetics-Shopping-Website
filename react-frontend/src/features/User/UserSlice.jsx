import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    submit(state, action) {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { submit } = UserSlice.actions;
export default UserSlice.reducer;
