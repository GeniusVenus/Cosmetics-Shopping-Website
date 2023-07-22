import { createSlice } from "@reduxjs/toolkit";

const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        value: 'process',
    },
    reducers: {
        setPurchaseState: (state, action) => {
            console.log('purchase set new value');
            state.value = action.payload;
        },
    },
})

export const { setPurchaseState } = purchaseSlice.actions;
export const selectPurchaseState = (state) => state.purchase.value;
export default purchaseSlice.reducer;