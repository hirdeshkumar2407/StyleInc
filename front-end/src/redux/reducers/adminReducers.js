import { actionTypes_D } from '../constants/adminConstants';

export const adminsigninReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes_D.ADMIN_SIGNIN_REQUEST:
			return { loading: true };
		case actionTypes_D.ADMIN_SIGNIN_SUCCESS:
			return { loading: false, adminDetails: action.payload };
		case actionTypes_D.ADMIN_SIGNIN_FAIL:
			return { loading: false, err: action.payload };
		case actionTypes_D.ADMIN_SIGNOUT:
			return {};

		default:
			return state;
	}
};
export const adminregisterReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes_D.ADMIN_REGISTER_REQUEST:
			return { loading: true };
		case actionTypes_D.ADMIN_REGISTER_SUCCESS:
			return { loading: false, adminDetails: action.payload };
		case actionTypes_D.ADMIN_REGISTER_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};

export const adminDetailsReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case actionTypes_D.ADMIN_DETAILS_REQUEST:
			return { loading: true };
		case actionTypes_D.ADMIN_DETAILS_SUCCESS:
			return { loading: false, admin: action.payload };
		case actionTypes_D.ADMIN_DETAILS_FAIL:
			return { loading: false, err: action.payload };
		case actionTypes_D.ADMIN_DETAILS_RESET:
			return {};
		default:
			return state;
	}
};
