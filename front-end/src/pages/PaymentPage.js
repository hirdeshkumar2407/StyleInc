import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentDetails } from '../redux/actions/cartActions';
import { Button, Container, Row, Col, Card, Body, Title, Form } from 'react-bootstrap';
import './background.css';
import Header from '../components/partials/Header';
import NavMN from '../components/partials/NavbarMenWomen'
import Footer from '../components/partials/Footer'

const PaymentPage = (props) => {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress, paymentDetails } = cart;

	if (!shippingAddress.address) {
		props.history.push('/shipping');
	}

	const [debitcard_no, setDebitCardNo] = useState(paymentDetails.debitcard_no);
	const [pin, setPIN] = useState(paymentDetails.pin);

	const dispatch = useDispatch();
	const paymentFormHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentDetails({ debitcard_no, pin }));
		props.history.push('/placeorder');
		//Dispatch  save shipping address
	};
	return (
		<div>
		<div><Header/></div>
			<div><NavMN/></div>
		<div className='regbgg-image hid'>
				<CheckoutSteps step1 step2 step3 />
			<Row className='justify-content-md-center payClass'>
				<Col xs lg='6'>
					<Card style={{ width: '45rem' }}>
					
						<Card.Body>
							<Card.Title>Payment Form</Card.Title>

							<Form onSubmit={paymentFormHandler}>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Card Number</Form.Label>
									<Form.Control
										type='text'
										id='debitcard_no'
										placeholder='****-****-****-****'
										value={debitcard_no}
										onChange={(e) => {
											setDebitCardNo(e.target.value);
										}}
										required
									/>
								</Form.Group>

								<Form.Group controlId='formBasicPassword'>
									<Form.Label>Pin</Form.Label>
									<Form.Control
										type='text'
										id='pin'
										placeholder='***...'
										value={pin}
										onChange={(e) => {
											setPIN(e.target.value);
										}}
										required
									/>
									<Form.Text className='text-muted'></Form.Text>
								</Form.Group>

								<Button size='lg'
										block
										variant='outline-secondary' 
										type='submit'
										>
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
	);
};

export default PaymentPage;
