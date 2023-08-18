import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getActiveCartByUserId } from "../../api/apiFunctions";

const initialState = {
    cartEntity : null,
    cartId: null,
    productIds : [],
    totalPrice: null,
    shippingMethod: 0,
    orderStatus: null
}

export const fetchCart = createAsyncThunk('cart/fetchCart', async (userId) => {
    const cart = await getActiveCartByUserId(userId);
    if (cart) {
      return cart;
    } else {
      throw new Error('Failed to get cart entity');
    }
  });

export const fetchProductIds = createAsyncThunk('cart/fetchProductIds', async (userId) => {
  const newCartData = await getActiveCartByUserId(userId);
  if (newCartData) {
    const productIds = newCartData.productIds;
    return productIds;
  } else {
    throw new Error('Failed to fetch new cart data');
  }
});

export const fetchTotalPrice = createAsyncThunk('cart/fetchTotalPrice', async (userId) => {
    const newCartData = await getActiveCartByUserId(userId);
    if (newCartData) {
      const totalPrice = newCartData.totalPrice;
      return totalPrice;
    } else {
      throw new Error('Failed to fetch new cart data');
    }
  });

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCurrentProductsInCart: (state, action) => {
            console.log(action.payload);
            try {
                state.productIdsInCart = action.payload;
            } catch(err) {
                console.log(err);
            }
            
        }, 
        setCurrentProductIds: (state, action) => {
            state.productIds = action.payload;
        },
        setCurrentCartId: (state, action) => {
            state.cartId = action.payload;
        },
        setCurrentTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        setCurrentShippingMethod: (state,action) => {
            state.shippingMethod = action.payload;
        },
        setCurrentOrderStatus: (state, action) => {
            state.orderStatus = action.payload;
        },
        setCurrentCartEntity: (state, action) => {
            state.cartEntity = action.payload;
            state.cartId = action.payload.cartId;
            state.productIds = action.payload.productIds;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchProductIds.fulfilled, (state,action) => {
            try {
                state.productIds = action.payload;
            } catch (err) {
                console.log(err);
            }
            
        })
        .addCase(fetchCart.fulfilled, (state,action) => {
            try {
                state.cartEntity = action.payload;
                state.totalPrice = action.payload.totalPrice;
            } catch (err) {
                console.log(err);
            }
        })
        .addCase(fetchTotalPrice.fulfilled, (state, action) => {
            try {
                // state.cartEntity = action.payload;
                state.totalPrice = action.payload;
            } catch (err) {
                console.log(err);
            }
        })
    }

})

//Todo : check other thing
export const {setCurrentProductIds, 
    setCurrentCartId, 
    setCurrentCartEntity, 
    setCurrentTotalPrice, 
    setCurrentShippingMethod,
    setCurrentOrderStatus} = cartSlice.actions;

export const getCurrentProductIds = (state) => state.cart.productIds;
export const getCurrentCartId = (state) => state.cart.cartId;
export const getCurrentTotalPrice = (state) => state.cart.totalPrice;
export const getCurrentShippingMethod = (state) => state.cart.shippingMethod;
export const getCurrentOrderStatus = (state) => state.cart.orderStatus;
export const getCurrentCartEntity = (state) => state.cart.cartEntity;

export default cartSlice.reducer;