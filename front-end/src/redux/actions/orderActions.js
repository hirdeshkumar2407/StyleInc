import { actionTypes_O } from '../constants/orderConstants';
import Axios from 'axios';
import { actionTypes_C } from '../constants/cartConstants';
export const createOrder = (order) => async (dispatch, getState) => {
	dispatch({
		type: actionTypes_O.ORDER_CREATE_REQUEST,
		payload: order,
	});
	try {
		const {
			userSignin: { userDetails },
		} = getState();
		const { data } = await Axios.post('/api/orders', order, {
			headers: {
				Authorization: `Bearer ${userDetails.token}`,
			},
		});
		dispatch({
			type: actionTypes_O.ORDER_CREATE_SUCCESS,
			payload: data.order,
		});
		dispatch({
			type: actionTypes_C.CART_EMTPY,
		});
		localStorage.removeItem('cartItems');
	} catch (err) {
		dispatch({
			type: actionTypes_O.ORDER_CREATE_FAIL,
			payload: err.response && err.response.data.message ? err.response.data.message : err.message,
		});
	}
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
	dispatch({
		type: actionTypes_O.ORDER_DETAILS_REQUEST,
		payload: orderId,
	});
	const {
		userSignin: { userDetails },
	} = getState();
	try {
		const { data } = await Axios.get(`/api/orders/${orderId}`, {
			headers: {
				Authorization: `Bearer ${userDetails.token}`,
			},
		});
		dispatch({
			type: actionTypes_O.ORDER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message = err.response && err.response.data.message ? err.response.data.message : err.message;
		dispatch({
			type: actionTypes_O.ORDER_DETAILS_FAIL,
			payload: message,
		});
	}
};

export const detailsAdminOrder = (orderId) => async (dispatch, getState) => {
	dispatch({
		type: actionTypes_O.ORDER_DETAILS_ADMIN_REQUEST,
		payload: orderId,
	});
	const {
		adminSignin: { adminDetails },
	} = getState();
	try {
		const { data } = await Axios.get(`/api/orders/${orderId}`, {
			headers: {
				Authorization: `Bearer ${adminDetails.token}`,
			},
		});
		dispatch({
			type: actionTypes_O.ORDER_DETAILS_ADMIN_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message = err.response && err.response.data.message ? err.response.data.message : err.message;
		dispatch({
			type: actionTypes_O.ORDER_DETAILS_ADMIN_FAIL,
			payload: message,
		});
	}
};

export const listOrderCustomer = () => async (dispatch, getState) => {
	dispatch({ type: actionTypes_O.ORDER_CUSTOMER_LIST_REQUEST });
	const {
		userSignin: { userDetails },
	} = getState();
	try {
		const { data } = await Axios.get('/api/orders/customer', {
			headers: {
				Authorization: `Bearer ${userDetails.token}`,
			},
		});
		dispatch({
			type: actionTypes_O.ORDER_CUSTOMER_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message = err.response && err.response.data.message ? err.response.data.message : err.message;
		dispatch({
			type: actionTypes_O.ORDER_CUSTOMER_LIST_FAIL,
			payload: message,
		});
	}
};

export const listOrders = () => async (dispatch, getState) => {
	dispatch({
		type: actionTypes_O.ORDER_LIST_REQUEST,
	});

	const {
		adminSignin: { adminDetails },
	} = getState();
	try {
		const { data } = await Axios.get('/api/orders', {
			headers: { Authorization: `Bearer ${adminDetails.token}` },
		});
		//console.log('ar', data);
		dispatch({
			type: actionTypes_O.ORDER_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message = err.response && err.response.data.message ? err.response.message.data : err.message;
		dispatch({
			type: actionTypes_O.ORDER_LIST_FAIL,
			payload: message,
		});
	}
};

export const deleteOrder = (orderId) => async (dispatch, getState) => {
	dispatch({
		type: actionTypes_O.ORDER_DELETE_REQUEST,
		payload: orderId,
	});
	const {
		adminSignin: { adminDetails },
	} = getState();
	try {
		const { data } = await Axios.delete(`/api/orders/${orderId}`, {
			headers: {
				Authorization: `Bearer ${adminDetails.token}`,
			},
		});
		dispatch({
			type: actionTypes_O.ORDER_DELETE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message = err.response && err.reponse.data.message ? err.response.data.message : err.message;
		dispatch({
			type: actionTypes_O.ORDER_DELETE_FAIL,
			payload: message,
		});
	}
};
