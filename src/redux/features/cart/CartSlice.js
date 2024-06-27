import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if product exists
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }

      // Increase total items count
      state.totalItems += 1;
    },
    increaseQuantity: (state, action) => {
      //if product exist
      state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.qty += 1;
          state.totalItems += 1;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      //if product exist
      state.cartItems.map((item) => {
        if (item.id === action.payload.id && item.qty === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
          state.totalItems -= 1;
        } else if (item.id === action.payload.id && item.qty > 1) {
          item.qty -= 1;
          state.totalItems -= 1;
        }
      });
    },
    removeAll: (state) => {
      state.cartItems = [];
      state.totalItems = 0;
    },
  },
});

// Export actions
export const { addToCart, increaseQuantity, decreaseQuantity, removeAll } =
  cartSlice.actions;

// Export selectors
export const selectTotalItems = (state) => state?.cart?.totalItems;
export const selectCartItems = (state) => state?.cart?.cartItems;

// Export reducer
export default cartSlice.reducer;
