import { actionTypes_U } from '../constants/userConstants';

export const usersigninReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes_U.USER_SIGNIN_REQUEST:
			return { loading: true };
		case actionTypes_U.USER_SIGNIN_SUCCESS:
			return { loading: false, userDetails: action.payload };
		case actionTypes_U.USER_SIGNIN_FAIL:
			return { loading: false, err: action.payload };
		case actionTypes_U.USER_SIGNOUT:
			return {};

		default:
			return state;
	}
};
export const userregisterReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes_U.USER_REGISTER_REQUEST:
			return { loading: true };
		case actionTypes_U.USER_REGISTER_SUCCESS:
			return { loading: false, userDetails: action.payload };
		case actionTypes_U.USER_REGISTER_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};

export const userDetailsReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case actionTypes_U.USER_DETAILS_REQUEST:
			return { loading: true };
		case actionTypes_U.USER_DETAILS_SUCCESS:
			return { loading: false, user: action.payload };
		case actionTypes_U.USER_DETAILS_FAIL:
			return { loading: false, err: action.payload };
		case actionTypes_U.USER_DETAILS_RESET:
			return {};
		default:
			return state;
	}
};

export const userUpdateProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes_U.USER_UPDATE_PROFILE_REQUEST:
			return { loading: true };
		case actionTypes_U.USER_UPDATE_PROFILE_SUCCESS:
			return { loading: false, success: true };
		case actionTypes_U.USER_UPDATE_PROFILE_FAIL:
			return { loading: false, err: action.payload };
		case actionTypes_U.USER_UPDATE_PROFILE_RESET:
			return {};
		default:
			return state;
	}
};

export const userListReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case actionTypes_U.USER_LIST_REQUEST:
			return { loading: true };
		case actionTypes_U.USER_LIST_SUCCESS:
			return { loading: false, users: action.payload };
		case actionTypes_U.USER_LIST_FAIL:
			return { loading: false, err: action.payload };
		default:
			return state;
	}
};

export const deleteUserReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes_U.USER_DELETE_REQUEST:
			return { loading: false };
		case actionTypes_U.USER_DELETE_SUCCESS:
			return { loading: false, success: true };
		case actionTypes_U.USER_DELETE_FAIL:
			return { loading: false, err: action.payload };
		case actionTypes_U.USER_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const updateUserReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes_U.USER_UPDATE_REQUEST:
			return { loading: true };
		case actionTypes_U.USER_UPDATE_SUCCESS:
			return { loading: false, success: true };
		case actionTypes_U.USER_UPDATE_FAIL:
			return { loading: false, err: action.payload };
		case actionTypes_U.USER_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
