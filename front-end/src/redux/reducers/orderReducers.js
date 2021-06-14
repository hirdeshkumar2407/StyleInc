import { actionTypes_O } from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes_O.ORDER_CREATE_REQUEST:
			return { loading: true };
		case actionTypes_O.ORDER_CREATE_SUCCESS:
			return { loading: false, success: true, order: action.payload };
		case actionTypes_O.ORDER_CREATE_FAIL:
			console.log(action.payload);
			return { loading: false, err: action.payload };
		case actionTypes_O.ORDER_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const orderDetailsReducer = (state = { loading: true, order: {} }, action) => {
	switch (action.type) {
		case actionTypes_O.ORDER_DETAILS_REQUEST:
			return { loading: true };
		case actionTypes_O.ORDER_DETAILS_SUCCESS:
			//console.log('Malik', action.payload);
			return { loading: false, order: action.payload };
		case actionTypes_O.ORDER_DETAILS_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};
export const orderDetailsAdminReducer = (state = { loading: true, order: {} }, action) => {
	switch (action.type) {
		case actionTypes_O.ORDER_DETAILS_ADMIN_REQUEST:
			return { loading: true };
		case actionTypes_O.ORDER_DETAILS_ADMIN_SUCCESS:
			//console.log('Malik', action.payload);
			return { loading: false, order: action.payload };
		case actionTypes_O.ORDER_DETAILS_ADMIN_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};

export const orderCustomerListReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case actionTypes_O.ORDER_CUSTOMER_LIST_REQUEST:
			return { loading: true };
		case actionTypes_O.ORDER_CUSTOMER_LIST_SUCCESS:
			return { loading: false, orders: action.payload };
		case actionTypes_O.ORDER_CUSTOMER_LIST_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};

export const orderListReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case actionTypes_O.ORDER_LIST_REQUEST:
			return { loading: true };
		case actionTypes_O.ORDER_LIST_SUCCESS:
			return { loading: false, orders: action.payload };
		case actionTypes_O.ORDER_LIST_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};

export const orderDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes_O.ORDER_DELETE_REQUEST:
			return { loading: true };
		case actionTypes_O.ORDER_DELETE_SUCCESS:
			return { loading: false, success: true };
		case actionTypes_O.ORDER_DELETE_FAIL:
			return { loading: false, err: action.payload };
		case actionTypes_O.ORDER_DELETE_RESET:
			return {};
		default:
			return state;
	}
};
