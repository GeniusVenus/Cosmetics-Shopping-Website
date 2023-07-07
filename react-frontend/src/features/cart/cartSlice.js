import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInCart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
export const selectCurrentCart = (state) => state.cart.itemsInCart;
