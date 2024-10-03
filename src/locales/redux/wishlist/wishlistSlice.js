import { createSlice } from "@reduxjs/toolkit";
const wishSlice = createSlice({
    name: 'wish',
    initialState: {
        items: []
    },
    reducers: {
        addWish: (state, action) => {
            const findProduct = state.items.find((x)=> x.id == action.payload.id)
            if(!findProduct)
            state.items.push(action.payload)
        },
        inremWish:(state, action) => {
    
            state.items.pop(action.payload)
        },
   
        
    }
})
export const { addWish } = wishSlice.actions
export const { inremWish } = wishSlice.actions
export default wishSlice.reducer
