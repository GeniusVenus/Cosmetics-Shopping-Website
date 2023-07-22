import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    value : [],
    status : 'idle'
}

export const fetchProductIdList = createAsyncThunk('product/fetchProductIdList', async () => {
    try {
        console.log('fetch');
        const url = 'http://localhost:8080/api/cart/cartId/64b536c31cb463531d44bcce';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        const productIds = data[0].productIds;
        // productSlice.actions.setNewList(productIds);
        console.log(productIds);
        const numberProductIds = productIds.map((str) => parseInt(str));
        return numberProductIds;
        // return [1,2,3];
    } catch(err) {
        console.log(err);
    }
})

const productSlice = createSlice({
    name: 'product',
    // initialState: {
    //     //Product ids
    //     value: [],
    //     status: 'idle'
    // },
    initialState,
    reducers: {
        setNewList: (state, action) => {
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

export const {setNewList} = productSlice.actions;
export const getProductList = (state) => state.product.value;

export default productSlice.reducer;