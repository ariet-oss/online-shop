import { configureStore } from "@reduxjs/toolkit";
import countReducer from './counterSlice/countSlice';
import wishlistReducer from './wishlist/wishlistSlice'
import cartReducer from './cart/cart'
import checkOutReducer from "./checkOut/checkOut"
const myStore = configureStore({
    reducer: {
        counter: countReducer,
        wishlist: wishlistReducer,
        cart:cartReducer,
        checkOut: checkOutReducer
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
})
export default myStore