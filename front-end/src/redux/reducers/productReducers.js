import { actionTypes_P } from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case actionTypes_P.PRODUCT_LIST_REQUEST:
			return { loading: true };
		case actionTypes_P.PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case actionTypes_P.PRODUCT_LIST_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};

export const productDetailsReducer = (state = { product: {}, loading: true }, action) => {
	switch (action.type) {
		case actionTypes_P.PRODUCT_DETAILS_REQUEST:
			return { loading: true };
		case actionTypes_P.PRODUCT_DETAILS_SUCCESS:
			return { loading: false, product: action.payload };
		case actionTypes_P.PRODUCT_DETAILS_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};

export const womenProductListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case actionTypes_P.PRODUCT_WOMEN_LIST_REQUEST:
			return { loading: true };
		case actionTypes_P.PRODUCT_WOMEN_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case actionTypes_P.PRODUCT_WOMEN_LIST_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};

export const womenProductDetailsReducer = (state = { product: {}, loading: true }, action) => {
	switch (action.type) {
		case actionTypes_P.PRODUCT_WOMEN_DETAILS_REQUEST:
			return { loading: true };
		case actionTypes_P.PRODUCT_WOMEN_DETAILS_SUCCESS:
			return { loading: false, product: action.payload };
		case actionTypes_P.PRODUCT_WOMEN_DETAILS_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};

export const menProductListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case actionTypes_P.PRODUCT_MEN_LIST_REQUEST:
			return { loading: true };
		case actionTypes_P.PRODUCT_MEN_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case actionTypes_P.PRODUCT_MEN_LIST_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};

export const menProductDetailsReducer = (state = { product: {}, loading: true }, action) => {
	switch (action.type) {
		case actionTypes_P.PRODUCT_MEN_DETAILS_REQUEST:
			return { loading: true };
		case actionTypes_P.PRODUCT_MEN_DETAILS_SUCCESS:
			return { loading: false, product: action.payload };
		case actionTypes_P.PRODUCT_MEN_DETAILS_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};
