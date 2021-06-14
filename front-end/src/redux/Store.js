import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { adminregisterReducer, adminsigninReducer } from './reducers/adminReducers';
import { cartReducer } from './reducers/cartReducers';
import {
	orderCreateReducer,
	orderDetailsReducer,
	orderCustomerListReducer,
	orderListReducer,
	orderDeleteReducer,
	orderDetailsAdminReducer,
} from './reducers/orderReducers';
import {
	menProductDetailsReducer,
	menProductListReducer,
	productDetailsReducer,
	productListReducer,
	womenProductDetailsReducer,
	womenProductListReducer,
} from './reducers/productReducers';
import {
	deleteUserReducer,
	updateUserReducer,
	userDetailsReducer,
	userListReducer,
	userregisterReducer,
	usersigninReducer,
	userUpdateProfileReducer,
} from './reducers/userReducers';
const initialState = {
	userSignin: {
		userDetails: localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null,
	},
	adminSignin: {
		adminDetails: localStorage.getItem('adminDetails') ? JSON.parse(localStorage.getItem('adminDetails')) : null,
	},
	cart: {
		cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
		shippingAddress: localStorage.getItem('shippingAddress')
			? JSON.parse(localStorage.getItem('shippingAddress'))
			: { fullname: '', address: '', city: '', postalCode: '', country: '' },
		paymentDetails: localStorage.getItem('paymentDetails')
			? JSON.parse(localStorage.getItem('paymentDetails'))
			: { debitcard_no: '', pin: '' },
	},
};
const rootReducers = combineReducers({
	productsList: productListReducer,
	productDetails: productDetailsReducer,
	productsMenList: menProductListReducer,
	productMenDetails: menProductDetailsReducer,
	productsWomenList: womenProductListReducer,
	productWomenDetails: womenProductDetailsReducer,
	cart: cartReducer,
	userSignin: usersigninReducer,
	userRegister: userregisterReducer,
	adminSignin: adminsigninReducer,
	adminRegister: adminregisterReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderAdminDetails: orderDetailsAdminReducer,
	orderCustomerList: orderCustomerListReducer,
	userInfo: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	orderList: orderListReducer,
	orderDelete: orderDeleteReducer,
	userList: userListReducer,
	userDelete: deleteUserReducer,
	userUpdate: updateUserReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
