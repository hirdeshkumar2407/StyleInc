import Axios from 'axios';
import { actionTypes_D } from '../constants/adminConstants';

export const adminSignIn = (email, password) => async (dispatch) => {
	dispatch({
		type: actionTypes_D.ADMIN_SIGNIN_REQUEST,
		payload: { email, password },
	});
	try {
		const { data } = await Axios.post('/api/admins/signin', { email, password });
		dispatch({
			type: actionTypes_D.ADMIN_SIGNIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem('adminDetails', JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: actionTypes_D.ADMIN_SIGNIN_FAIL,
			payload: err.response && err.response.data.message ? err.response.data.message : err.message,
		});
	}
};
export const adminRegister = (name, email, password) => async (dispatch) => {
	dispatch({
		type: actionTypes_D.ADMIN_REGISTER_REQUEST,
		payload: { email, password },
	});
	try {
		const { data } = await Axios.post('/api/admins/register', { name, email, password });
		dispatch({
			type: actionTypes_D.ADMIN_REGISTER_SUCCESS,
			payload: data,
		});
		dispatch({
			type: actionTypes_D.ADMIN_SIGNIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem('adminDetails', JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: actionTypes_D.ADMIN_REGISTER_FAIL,
			payload: err.response && err.response.data.message ? err.response.data.message : err.message,
		});
	}
};

export const adminSignout = () => (dispatch) => {
	localStorage.removeItem('adminDetails');

	dispatch({
		type: actionTypes_D.ADMIN_SIGNOUT,
	});
	document.location.href = '/adminsignin';
};

export const detailsAdmin = (adminId) => async (dispatch, getState) => {
	dispatch({
		type: actionTypes_D.ADMIN_DETAILS_REQUEST,
		payload: adminId,
	});
	const {
		adminSignin: { adminDetails },
	} = getState();
	try {
		const { data } = await Axios.get(`/api/admins/${adminId}`, {
			headers: { Authorization: `Bearer ${adminDetails.token}` },
		});
		dispatch({
			type: actionTypes_D.ADMIN_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message = err.response && err.response.data.message ? err.response.data.message : err.message;
		dispatch({ type: actionTypes_D.ADMIN_DETAILS_FAIL, payload: message });
	}
};
