import { createSlice } from "@reduxjs/toolkit";
const checkSlice = createSlice({
    name: 'wish',
    initialState: {
        check: []
    },
    reducers: {
        addCheck: (state, action) => {
            const findProduct = state.check.find((x)=> x.id == action.payload.id)
            if(!findProduct)
            state.check.push({...action.payload, quantity:1})
        },
        incremList:(state, action) => {
            state.check.pop(action.payload)
        },
        incQunatity:(state,action)=>{
            const findList = state.check.find((x)=> x.id == action.payload)         
            if(findList)   {
                findList.quantity+=1
            }
        },
        incQunatityIn:(state,action)=>{
            const findList = state.check.find((x)=> x.id == action.payload)        
            if(findList.quantity>1)   {
                findList.quantity-=1
            }
        }
    }
})
export const { addCheck , incQunatity, incQunatityIn} = checkSlice.actions
export default checkSlice.reducer
