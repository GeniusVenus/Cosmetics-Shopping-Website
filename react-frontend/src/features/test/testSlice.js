import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: 'test',
    initialState: {
        value: [1,2,3],
    },
    reducers: {
        setValue: (state, action) => {
            console.log('here');
            state.value = action.payload;
        },
    },
})

export const {setValue} = testSlice.actions;
export const selectValue = (state) => state.test.value;
export default testSlice.reducer;