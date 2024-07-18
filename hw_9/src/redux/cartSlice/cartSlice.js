import { createSlice } from "@reduxjs/toolkit";

import { TotalItems, TotalPrice } from "../../components/utils/cartSliceUtils";

const initialState = {
	items: [],
	totalPrice: 0,
	totalItems: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemToCart: (state, action) => {
			const product = state.items.find((item) => item.id === action.payload.id);

			if (!product) {
				state.items.push({ ...action.payload, qty: 1 });
			} else {
				product.qty += 1;
			}

			TotalItems(state);
			TotalPrice(state);
		},
		deleteItem: (state, action) => {
			state.items = state.items.filter((item) => item.id !== action.payload);

			TotalItems(state);
			TotalPrice(state);
		},
		increment: (state, action) => {
			const product = state.items.find((item) => item.id === action.payload);
			product.qty += 1;

			TotalItems(state);
			TotalPrice(state);
		},
		decrement: (state, action) => {
			const product = state.items.find((item) => item.id === action.payload);
			product.qty -= 1;

			TotalItems(state);
			TotalPrice(state);

			if (product.qty < 1) state.items = state.items.filter((item) => item.id !== action.payload);
		},
		clearCart: (state) => {
			state.items = [];
			state.totalPrice = 0;
			state.totalItems = 0;
		},
	},
});

export default cartSlice.reducer;
export const { addItemToCart, increment, decrement, deleteItem, clearCart } = cartSlice.actions;
