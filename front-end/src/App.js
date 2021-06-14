/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePageMen from './pages/HomePageMen';
import ProductMenPage from './pages/ProductMenPage';
import RegisterPage from './pages/RegisterPage';
import ShippingPage from './pages/ShippingPage';
import SigninPage from './pages/SigninPage';
import PaymentPage from './pages/PaymentPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import HomePageWomen from './pages/HomePageWomen';
import OrderPage from './pages/OrderPage';
import HomePage from './components/staticpages/Home';
import AboutPage from './components/staticpages/AboutUs';
import ContactPage from './components/staticpages/ContactUs';

import PlaceorderPage from './pages/PlaceorderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import ProductPageWomen from './pages/ProductPageWomen';
import CartPageFemale from './pages/CartPageFemale';

import AdminRoute from './components/AdminRoute';
import UserList from './admin/UserList';
import OrderList from './admin/OrderList';
import MenClothesPage from './admin/add_mensCloths';
import AdminDashboard from './admin/admin_dashboard';
import MensProductslist from './admin/MensProductslist';
import WomenProductslist from './admin/WomenProductslist';
import AdminloginPage from './admin/AdminloginPage';
import UserEditList from './admin/UserEditList';
import OrderPageAdmin from './admin/OrderPageAdmin';
import update_mensCloths from './admin/UpdateMenClothes';
import UpdateWomenClothes from './admin/UpdateWomenClothes';
import add_womenCloths from './admin/add_womensCloths';
function App() {
	return (
		<div className='grid-container'>
			<main>
				<Route path='/adminsignin' component={AdminloginPage} exact />
				<AdminRoute path='/dashboard' component={AdminDashboard} exact />
				<AdminRoute path='/dashboard/users' component={UserList} exact />
				<AdminRoute path='/dashboard/women/add' component={add_womenCloths} exact />
				<AdminRoute path='/dashboard/users/:id/edit' component={UserEditList} exact />
				<AdminRoute path='/dashboard/men/add' component={MenClothesPage} exact />
				<AdminRoute path='/dashboard/men/list' component={MensProductslist} exact />
				<AdminRoute path='/dashboard/men/list/:id/update' component={update_mensCloths} exact />
				<AdminRoute path='/dashboard/women/list/:id/update' component={UpdateWomenClothes} exact />
				<AdminRoute path='/dashboard/women/list' component={WomenProductslist} exact />
				<AdminRoute path='/dashboard/orders' component={OrderList} exact />
				<AdminRoute path='/dashboard/order/:id/details' component={OrderPageAdmin} exact />

				<Route path='/' component={HomePage} exact />
				<Route path='/cart/:id?' component={CartPage} exact />
				<Route path='/cartf/:id?' component={CartPageFemale} exact />
				<Route path='/productf/:id' component={ProductPageWomen} exact />
				<Route path='/productm/:id' component={ProductMenPage} exact />
				<Route path='/signin' component={SigninPage} exact />
				<Route path='/register' component={RegisterPage} exact />
				<Route path='/shipping' component={ShippingPage} exact />
				<Route path='/payment' component={PaymentPage} exact />
				<Route path='/placeorder' component={PlaceorderPage} exact />
				<Route path='/orderhistory' component={OrderHistoryPage} exact />
				<Route path='/order/:id' component={OrderPage} exact />
				<Route path='/women' component={HomePageWomen} exact />
				<Route path='/men' component={HomePageMen} exact />
				<PrivateRoute path='/profile' component={ProfilePage} exact />
				<Route path='/about-us' component={AboutPage} exact />
				<Route path='/contact-us' component={ContactPage} exact />
			</main>
		</div>
	);
}

export default App;
