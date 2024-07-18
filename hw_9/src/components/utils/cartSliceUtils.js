export const TotalItems = (state) => {
	state.totalItems = state.items.reduce((total, item) => total + item.qty, 0);
};

export const TotalPrice = (state) => {
	state.totalPrice = state.items.reduce((total, item) => total + item.qty * item.unitPrice, 0);
};
