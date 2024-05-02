import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInCart: [
    {
      productId: "64e071dfed2e0749470c47cf",
      name: "Paula's Choice 2% BHA Body Spot Exfoliant (210ml)",
      num: 999,
      brand: "handsome",
      image:
        "https://static.thcdn.com/images/large/original//productimg/1600/1600/11174198-2045069326047045.png",
      cost: "£33.00",
      volume: "210 ml",
      quantity: 2,
    },
    {
      productId: "64e071dfed2e0749470c47cf",
      name: "Paula's Choice 2% BHA Body Spot Exfoliant (210ml)",
      num: 999,
      brand: "handsome",
      image:
        "https://static.thcdn.com/images/large/original//productimg/1600/1600/11174198-2045069326047045.png",
      cost: "£33.00",
      volume: "210 ml",
      quantity: 1,
    },
    {
      productId: "64e071dfed2e0749470c47cf",
      name: "Paula's Choice 2% BHA Body Spot Exfoliant (210ml)",
      num: 999,
      brand: "handsome",
      image:
        "https://static.thcdn.com/images/large/original//productimg/1600/1600/11174198-2045069326047045.png",
      cost: "£33.00",
      volume: "210 ml",
      quantity: 4,
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
export default cartSlice.reducer;
export const selectCurrentCart = (state) => state.cart.itemsInCart;
