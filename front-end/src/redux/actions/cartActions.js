import Axios from 'axios';
import { actionTypes_C } from '../constants/cartConstants';

export const addToCart = (product_id, qty) => async (dispatch, getState) => {
	const { data } = await Axios.get(`/api/menClothes/${product_id}`);
	console.log(data);
	dispatch({
		type: actionTypes_C.CART_ADD_ITEM,
		payload: {
			name: data.name,
			image: data.image,
			price: data.price,
			inStock: data.inStock,
			product: data._id,
			qty,
		},
	});
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const addToCartF = (product_id, qty) => async (dispatch, getState) => {
	const { data } = await Axios.get(`/api/womenclothes/${product_id}`);
	console.log(data);
	dispatch({
		type: actionTypes_C.CART_ADD_ITEM,
		payload: {
			name: data.name,
			image: data.image,
			price: data.price,
			inStock: data.inStock,
			product: data._id,
			qty,
		},
	});
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeCart = (product_id) => (dispatch, getState) => {
	dispatch({
		type: actionTypes_C.CART_REMOVE_ITEM,
		payload: product_id,
	});
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveshippingAddress = (data) => (dispatch) => {
	dispatch({ type: actionTypes_C.CART_SAVE_SHIPPING_ADDRESS, payload: data });
	localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentDetails = (data) => (dispatch) => {
	dispatch({ type: actionTypes_C.CART_SAVE_PAYMENT_DETAILS, payload: data });
	localStorage.setItem('paymentDetails', JSON.stringify(data));
};
