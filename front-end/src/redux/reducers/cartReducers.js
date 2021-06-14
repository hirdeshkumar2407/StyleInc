import { actionTypes_C } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case actionTypes_C.CART_ADD_ITEM:
			const item = action.payload;
			const ex_Item = state.cartItems.find((a) => a.product === item.product);
			if (ex_Item) {
				return {
					...state,
					cartItems: state.cartItems.map((a) => (a.product === ex_Item.product ? item : a)),
				};
			} else {
				return { ...state, cartItems: [...state.cartItems, item] };
			}
		case actionTypes_C.CART_REMOVE_ITEM:
			return { ...state, cartItems: state.cartItems.filter((a) => a.product !== action.payload) };
		case actionTypes_C.CART_SAVE_SHIPPING_ADDRESS:
			return { ...state, shippingAddress: action.payload };
		case actionTypes_C.CART_SAVE_PAYMENT_DETAILS:
			return { ...state, paymentDetails: action.payload };
		default:
			return state;
	}
};
