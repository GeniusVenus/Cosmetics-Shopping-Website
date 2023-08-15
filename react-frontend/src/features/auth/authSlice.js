import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  user: null,
  token: null,
  roles: [],
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { id, user, token, roles } = action.payload;
      state.user = user;
      state.token = token;
      state.id = id;
      state.roles = roles;
    },
    logOut: (state) => {
      state.id = null;
      state.user = null;
      state.token = null;
      state.roles = [];
    },
  },
});
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUserId = (state) => state.auth.id;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentRoles = (state) => state.auth.roles;
