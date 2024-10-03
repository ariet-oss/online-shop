import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name:'counter',
    initialState:{
        value2:2,
        value:2
    },  
    reducers:{
     addCount:(state)=>{
        state.value+=1
     },
     incrementCount:(state)=>{
        if(state.value>0)
        state.value-=1
     },
     addCount2:(state)=>{
        state.value2+=1
     },
     incrementCount2:(state)=>{
        if(state.value2>0)
        state.value2-=1
     }
    }
})
export const {addCount} =countSlice.actions
export const  {incrementCount2}=countSlice.actions
export const {addCount2} =countSlice.actions
export const  {incrementCount}=countSlice.actions
export default countSlice.reducer