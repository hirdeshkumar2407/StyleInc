import Axios from 'axios';
import { actionTypes_U } from '../constants/userConstants';
import { actionTypes_C } from '../constants/cartConstants';

export const signin = (email, password) => async (dispatch) => {
	dispatch({
		type: actionTypes_U.USER_SIGNIN_REQUEST,
		payload: { email, password },
	});
	try {
		const { data } = await Axios.post('/api/users/signin', { email, password });
		dispatch({
			type: actionTypes_U.USER_SIGNIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem('userDetails', JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: actionTypes_U.USER_SIGNIN_FAIL,
			payload: err.response && err.response.data.message ? err.response.data.message : err.message,
		});
	}
};
export const register = (name, email, password) => async (dispatch) => {
	dispatch({
		type: actionTypes_U.USER_REGISTER_REQUEST,
		payload: { email, password },
	});
	try {
		const { data } = await Axios.post('/api/users/register', { name, email, password });
		dispatch({
			type: actionTypes_U.USER_REGISTER_SUCCESS,
			payload: data,
		});
		dispatch({
			type: actionTypes_U.USER_SIGNIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem('userDetails', JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: actionTypes_U.USER_REGISTER_FAIL,
			payload: err.response && err.response.data.message ? err.response.data.message : err.message,
		});
	}
};

export const signout = () => (dispatch) => {
	dispatch({
		type: actionTypes_C.CART_EMTPY,
	});
	dispatch({
		type: actionTypes_C.SHIPPING_EMTPY,
	});
	dispatch({
		type: actionTypes_C.PAYMENT_EMTPY,
	});
	localStorage.removeItem('userDetails');
	localStorage.removeItem('cartItems');
	localStorage.removeItem('shippingAddress');
	localStorage.removeItem('paymentDetails');
	dispatch({
		type: actionTypes_U.USER_SIGNOUT,
	});
	document.location.href = '/signin';
};

export const detailsUser = (userId) => async (dispatch, getState) => {
	dispatch({
		type: actionTypes_U.USER_DETAILS_REQUEST,
		payload: userId,
	});
	const {
		adminSignin: { adminDetails },
	} = getState();
	try {
		const { data } = await Axios.get(`/api/users/${userId}`, {
			headers: { Authorization: `Bearer ${adminDetails.token}` },
		});
		dispatch({
			type: actionTypes_U.USER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message = err.response && err.response.data.message ? err.response.data.message : err.message;
		dispatch({ type: actionTypes_U.USER_DETAILS_FAIL, payload: message });
	}
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
	dispatch({
		type: actionTypes_U.USER_UPDATE_PROFILE_REQUEST,
		payload: user,
	});
	const {
		userSignin: { userDetails },
	} = getState();
	try {
		const { data } = await Axios.put(`api/users/profile`, user, {
			headers: {
				Authorization: `Bearer ${userDetails.token}`,
			},
		});
		dispatch({
			type: actionTypes_U.USER_UPDATE_PROFILE_SUCCESS,
			payload: data,
		});
		dispatch({
			type: actionTypes_U.USER_SIGNIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem('userDetails', JSON.stringify(data));
	} catch (err) {
		const message = err.response && err.response.data.message ? err.response.data.message : err.message;
		dispatch({ type: actionTypes_U.USER_UPDATE_PROFILE_FAIL, payload: message });
	}
};

export const listUsers = () => async (dispatch, getState) => {
	dispatch({
		type: actionTypes_U.USER_LIST_REQUEST,
	});
	const {
		adminSignin: { adminDetails },
	} = getState();
	try {
		const { data } = await Axios.get('/api/users', {
			headers: {
				Authorization: `Bearer ${adminDetails.token}`,
			},
		});
		dispatch({
			type: actionTypes_U.USER_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message = err.response && err.response.data.message ? err.response.data.message : err.message;
		dispatch({
			type: actionTypes_U.USER_LIST_FAIL,
			payload: message,
		});
	}
};

export const deleteUser = (userId) => async (dispatch, getState) => {
	dispatch({
		type: actionTypes_U.USER_DELETE_REQUEST,
		payload: userId,
	});
	const {
		adminSignin: { adminDetails },
	} = getState();
	try {
		const { data } = await Axios.delete(`/api/users/${userId}`, {
			headers: {
				Authorization: `Bearer ${adminDetails.token}`,
			},
		});
		dispatch({
			type: actionTypes_U.USER_DELETE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message = err.response && err.response.data.message ? err.response.data.message : err.message;
		dispatch({
			type: actionTypes_U.USER_DELETE_FAIL,
			payload: message,
		});
	}
};

export const updateUser = (user) => async (dispatch, getState) => {
	dispatch({
		type: actionTypes_U.USER_UPDATE_REQUEST,
		payload: user,
	});
	const {
		adminSignin: { adminDetails },
	} = getState();
	try {
		const { data } = await Axios.put(`/api/users/${user._id}`, user, {
			headers: {
				Authorization: `Bearer ${adminDetails.token}`,
			},
		});
		dispatch({
			type: actionTypes_U.USER_UPDATE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message = err.response && err.response.data.message ? err.response.data.message : err.message;
		dispatch({
			type: actionTypes_U.USER_UPDATE_FAIL,
			payload: message,
		});
	}
};
