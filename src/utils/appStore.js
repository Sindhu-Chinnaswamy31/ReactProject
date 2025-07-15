import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

console.log("DEBUG: cartReducer is", typeof cartReducer);

console.log("cartReducer:", cartReducer);
const appStore = configureStore({
    reducer : { //combination of different slices
        cart: cartReducer,
        // user: UserReducer
    },
});

export default appStore;