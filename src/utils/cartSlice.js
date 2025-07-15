// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state with item objects
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload); // expecting { id, name }
        },
        removeItem: (state, action) => {
            // action.payload should be the id of the item to remove
            state.items.pop();
        },
        clearCart: (state) => {
            //RKT - either mutate the existing state or return a new state
            //return { items : [] };
            state.items.length = 0; // clears the array
        }
    }
});

// Export action creators
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export reducer to include in store
export default cartSlice.reducer;
