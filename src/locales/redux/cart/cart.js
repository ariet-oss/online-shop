import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'wish',
    initialState: {
        list: []
    },
    reducers: {
        addList: (state, action) => {
            const findProduct = state.list.find((x)=> x.id == action.payload.id)
            if(!findProduct)
            state.list.push({...action.payload, quantity:1})
        },
        incremList:(state, action) => {
            state.list.pop(action.payload)
        },
        incQunatity:(state,action)=>{
            const findList = state.list.find((x)=> x.id == action.payload)         
            if(findList)   {
                findList.quantity+=1
            }
        },
        incQunatityIn:(state,action)=>{
            const findList = state.list.find((x)=> x.id == action.payload)         
           
            if(findList.quantity>1)   {
                findList.quantity-=1
            }
        }
    }
})
export const { addList , incQunatity, incQunatityIn} = cartSlice.actions
export default cartSlice.reducer
