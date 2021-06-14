import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AdminRoute = ({ component: Component, ...rest }) => {
	const adminSignin = useSelector((state) => state.adminSignin);
	const { adminDetails } = adminSignin;
	return (
		<div>
			<Route
				{...rest}
				render={(props) => (adminDetails ? <Component {...props}></Component> : <Redirect to='/adminsignin' />)}
			></Route>
		</div>
	);
};

export default AdminRoute;
