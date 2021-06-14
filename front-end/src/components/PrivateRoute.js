import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const userSignin = useSelector((state) => state.userSignin);
	const { userDetails } = userSignin;
	return (
		<div>
			<Route
				{...rest}
				render={(props) => (userDetails ? <Component {...props}></Component> : <Redirect to='/signin' />)}
			></Route>
		</div>
	);
};

export default PrivateRoute;
