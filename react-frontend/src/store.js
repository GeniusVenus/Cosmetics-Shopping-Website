import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";
import testReducer from "./features/test/testSlice";
import productReducer from "./features/product/productSlice";
import purchaseReducer from "./features/purchase/purchaseSlice";

const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authReducer,
    // cart: cartReducer,
    test: testReducer,
    product: productReducer,
    purchase: purchaseReducer
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),

  // devTools: true,
});

export default store;
