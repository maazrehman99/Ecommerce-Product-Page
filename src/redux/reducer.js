import {createReducer } from '@reduxjs/toolkit';

export const cartReducer = createReducer({

    cartItems: [],
    Total: 0,
    SubTotal: 0,
    Tax: 0,
    Shipping: 0,
},{});