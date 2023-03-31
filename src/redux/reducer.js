import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
    Total: 0,
    SubTotal: 0,
    Tax: 0,
    Shipping: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((i) => i.id === item.id);
      if (existItem) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },
    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity -= 1;
        });
      }
    },
    deleteFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((i) => i.id!== action.payload);
    }
  }
);
