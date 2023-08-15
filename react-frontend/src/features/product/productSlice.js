import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    value : [],
    availProd : [],
    status : 'idle'
}

export const fetchProductIdList = createAsyncThunk('product/fetchProductIdList', async (userId) => {
    //Refactor
    try {
        console.log('fetch');
        const url = `http://localhost:8080/api/cart/userId/${userId}/1`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        const productIds = data[0].productIds;
        return productIds;
    } catch(err) {
        console.log(err);
        throw err; // Re-throw the error to let the calling code handle it
    }
});

const productSlice = createSlice({
    name: 'product',
    // initialState: {
    //     //Product ids
    //     value: [],
    //     status: 'idle'
    // },
    initialState,
    reducers: {
        setCurrentProductsInCart: (state, action) => {
            console.log(action.payload);
            try {
                state.value = action.payload;
            } catch(err) {
                console.log(err)
            }
            
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchProductIdList.fulfilled, (state,action) =>
        {
            try {
                state.value = action.payload;
            } catch (err) {
                console.log(err);
            }
            
        })
    }

})

export const {setCurrentProductsInCart} = productSlice.actions;
export const getProductsInCart = (state) => state.product.value;

export default productSlice.reducer;