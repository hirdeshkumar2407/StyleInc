import { actionTypes_P } from '../constants/productConstants';
import Axios from 'axios';
export const productsList = () => async (dispatch) => {
	dispatch({
		type: actionTypes_P.PRODUCT_LIST_REQUEST,
	});
	try {
		const { data } = await Axios.get('/api/products');
		console.log(data);
		dispatch({
			type: actionTypes_P.PRODUCT_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: actionTypes_P.PRODUCT_LIST_FAIL,
			payload: err.message,
		});
	}
};

export const ProductDetails = (product_id) => async (dispatch) => {
	dispatch({
		type: actionTypes_P.PRODUCT_DETAILS_REQUEST,
	});
	try {
		const { data } = await Axios.get(`/api/products/${product_id}`);
		dispatch({
			type: actionTypes_P.PRODUCT_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: actionTypes_P.PRODUCT_DETAILS_FAIL,
			payload: err.response && err.response.data.message ? err.resonse.data.message : err.message,
		});
	}
};

export const womenProductsList = () => async (dispatch) => {
	dispatch({
		type: actionTypes_P.PRODUCT_WOMEN_LIST_REQUEST,
	});
	try {
		const { data } = await Axios.get('/api/womenclothes');
		console.log(data);
		dispatch({
			type: actionTypes_P.PRODUCT_WOMEN_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: actionTypes_P.PRODUCT_WOMEN_LIST_FAIL,
			payload: err.message,
		});
	}
};

export const womenProductDetails = (product_id) => async (dispatch) => {
	dispatch({
		type: actionTypes_P.PRODUCT_WOMEN_DETAILS_REQUEST,
	});
	try {
		const { data } = await Axios.get(`/api/womenclothes/${product_id}`);
		dispatch({
			type: actionTypes_P.PRODUCT_WOMEN_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: actionTypes_P.PRODUCT_WOMEN_DETAILS_FAIL,
			payload: err.response && err.response.data.message ? err.resonse.data.message : err.message,
		});
	}
};

export const menProductsList = () => async (dispatch) => {
	dispatch({
		type: actionTypes_P.PRODUCT_MEN_LIST_REQUEST,
	});
	try {
		const { data } = await Axios.get('/api/menclothes');
		console.log(data);
		dispatch({
			type: actionTypes_P.PRODUCT_MEN_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: actionTypes_P.PRODUCT_MEN_LIST_FAIL,
			payload: err.message,
		});
	}
};

export const menProductDetails = (product_id) => async (dispatch) => {
	dispatch({
		type: actionTypes_P.PRODUCT_MEN_DETAILS_REQUEST,
	});
	try {
		const { data } = await Axios.get(`/api/menclothes/${product_id}`);
		dispatch({
			type: actionTypes_P.PRODUCT_MEN_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: actionTypes_P.PRODUCT_MEN_DETAILS_FAIL,
			payload: err.response && err.response.data.message ? err.resonse.data.message : err.message,
		});
	}
};
