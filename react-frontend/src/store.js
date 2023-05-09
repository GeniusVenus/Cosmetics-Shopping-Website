import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/User/UserSlice";
const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;
