import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
       count: 0
    },
    reducers: {
        buttonClick: (state,action)=>{
           state.count += 1;
        }
    }
})

export const { buttonClick } = cartSlice.actions;
export default cartSlice.reducer;