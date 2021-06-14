import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveshippingAddress } from '../redux/actions/cartActions';
import { Button, Container, Row, Col, Card, Body, Title, Form } from 'react-bootstrap';
import './background.css';
import Header from '../components/partials/Header';
import NavMN from '../components/partials/NavbarMenWomen'
import Footer from '../components/partials/Footer'
const ShippingPage = (props) => {
	const userSignin = useSelector((state) => state.userSignin);
	const { userDetails } = userSignin;
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;
	if (!userDetails) {
		props.history.push('/signin');
	}

	const [fullname, setFullName] = useState(shippingAddress.fullname);
	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
	const [country, setCountry] = useState(shippingAddress.country);
	const dispatch = useDispatch();
	const shippingFormHandler = (e) => {
		e.preventDefault();
		dispatch(saveshippingAddress({ fullname, address, city, postalCode, country }));
		props.history.push('/payment');
		//Dispatch  save shipping address
	};
	return (
		<div>
		<div><Header/></div>
			<div><NavMN/></div>
		<div className='shipbgg-image hid'>
			<CheckoutSteps step1 step2 />
			<Row className='justify-content-md-center shippClass'>
				<Col xs lg='6'>
					<Card style={{ width: '45rem' }}>
						<Card.Body>
							<Card.Title>Shipping Address</Card.Title>

							<Form onSubmit={shippingFormHandler}>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Name</Form.Label>
									<Form.Control
										type='text'
										id='fullname'
										placeholder='Enter Full Name'
										value={fullname}
										onChange={(e) => {
											setFullName(e.target.value);
										}}
										required
									/>
								</Form.Group>

								<Form.Group controlId='formBasicPassword'>
									<Form.Label>Address</Form.Label>
									<Form.Control
										type='text'
										id='address'
										placeholder='Enter address'
										value={address}
										onChange={(e) => {
											setAddress(e.target.value);
										}}
										required
									/>
								</Form.Group>

								<Form.Group controlId='formBasicPassword'>
									<Form.Label>Postal Code</Form.Label>
									<Form.Control
										type='text'
										id='postalCode'
										placeholder='Enter postal code'
										value={postalCode}
										onChange={(e) => {
											setPostalCode(e.target.value);
										}}
										required
									/>
								</Form.Group>

								<Form.Group controlId='formBasicPassword'>
									<Form.Label>City</Form.Label>
									<Form.Control
										type='text'
										id='city'
										placeholder='Enter city'
										value={city}
										onChange={(e) => {
											setCity(e.target.value);
										}}
										required
									/>
								</Form.Group>
								<Form.Group controlId='formBasicPassword'>
									<Form.Label>Country</Form.Label>
									<Form.Control
										type='text'
										id='country'
										placeholder='Enter country'
										value={country}
										onChange={(e) => {
											setCountry(e.target.value);
										}}
										required
									/>
								</Form.Group>
								<Button size='lg' block variant='outline-secondary' type='submit'>
									Continue
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
		<div><Footer/></div>
		</div>

		// <div>
		// 	<CheckoutSteps step1 step2 />
		// 	<form className='form' onSubmit={shippingFormHandler}>
		//
		//
		//
		//
		// 		<div>
		// 			<label htmlFor='city'>City</label>
		// 			<input
		//
		// 			/>
		// 		</div>

		// 		<div>
		// 			<label htmlFor='country'>Country</label>
		// 			<input
		// 				type='text'
		// 				id='country'
		// 				placeholder='Enter country'
		// 				value={country}
		// 				onChange={(e) => {
		// 					setCountry(e.target.value);
		// 				}}
		// 				required
		// 			/>
		// 		</div>
		// 		<div>
		// 			<label />
		// 			<button className='primary' type='submit'>
		// 				Continue
		// 			</button>
		// 		</div>
		// 	</form>
		// </div>
	);
};

export default ShippingPage;
