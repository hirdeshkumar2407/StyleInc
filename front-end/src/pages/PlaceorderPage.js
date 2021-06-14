import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../redux/actions/orderActions';
import { actionTypes_O } from '../redux/constants/orderConstants';
import LoaderComp from '../components/LoaderComp';
import MessageComp from '../components/MessageComp';
import { Row, Col, Card, ListGroup, Nav, Figure, Button } from 'react-bootstrap';
import './background.css';
import Header from '../components/partials/Header';
import NavMN from '../components/partials/NavbarMenWomen'
import Footer from '../components/partials/Footer'
const PlaceorderPage = (props) => {
	const cart = useSelector((state) => state.cart);
	if (!cart.paymentDetails.debitcard_no) {
		props.history.push('/payment');
	}
	const orderCreate = useSelector((state) => state.orderCreate);
	const { loading, success, err, order } = orderCreate;
	const priceConversion = (num) => Number(num.toFixed(2));
	cart.itemsPrice = priceConversion(cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0));
	cart.shippingPrice = cart.itemsPrice > 100 ? priceConversion(100) : priceConversion(0);
	cart.tax = priceConversion(cart.itemsPrice * 0.12);
	cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.tax;
	const dispatch = useDispatch();
	const placeOrderHandler = () => {
		dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));

		alert('Order Has been Placed Successfully');
		props.history.push('/');
	};
	useEffect(() => {
		if (success) {
			dispatch({ type: actionTypes_O.ORDER_CREATE_RESET });
		}
	}, [dispatch, order, props.history, success]);
	return (
		<div>
		<div><Header/></div>
			<div><NavMN/></div>
		<div>
			<CheckoutSteps step1 step2 step3 step4 />
			<Row>
				<Col>
					<ListGroup as='ul' style={{ width: '65rem' }}>
						<ListGroup.Item as='li'>
							<Card>
								<Card.Body>
									<Card.Title>Shipping</Card.Title>
								</Card.Body>
								<Card.Text>
									<strong>Name:</strong> {cart.shippingAddress.fullname} <br />
									<strong>Address:</strong>
									{cart.shippingAddress.address},{cart.shippingAddress.city},
									{cart.shippingAddress.postalCode},{cart.shippingAddress.country}
								</Card.Text>
							</Card>
						</ListGroup.Item>
						<ListGroup.Item as='li'>
							<Card>
								<Card.Body>
									<Card.Title>Payment</Card.Title>
								</Card.Body>
								<Card.Text>
									<strong>Debit Card Number:</strong> {cart.paymentDetails.debitcard_no}
								</Card.Text>
							</Card>
						</ListGroup.Item>
						<ListGroup.Item>
							<Card>
								<Card.Body>
									<Card.Title>Order Items</Card.Title>
									<ListGroup as='ul'>
										{cart.cartItems.map((item) => (
											<ListGroup.Item as='li' key={item.product}>
												<Row>
													<div>
														<Figure>
															<Figure.Image
																width={120}
																height={130}
																src={item.image}
																alt={item.image}
															/>
														</Figure>
													</div>

													<div style={{ width: '30rem' }}>
														<Nav.Link to={`/product/${item.product}`}>{item.name}</Nav.Link>
													</div>

													<div>
														{item.qty} X PKR{item.price}= PKR {item.qty * item.price}
													</div>
												</Row>
											</ListGroup.Item>
										))}
									</ListGroup>
								</Card.Body>
							</Card>
						</ListGroup.Item>
					</ListGroup>
				</Col>

				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Order Summary</Card.Title>

							<ListGroup as='ul'>
								<ListGroup.Item as='li'>
									<Row>
										<div>Items</div>
										<div>PKR {cart.itemsPrice.toFixed(2)}</div>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item as='li'>
									<Row>
										<div>Shipping Cost</div>
										<div>PKR {cart.shippingPrice.toFixed(2)}</div>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item as='li'>
									<Row>
										<div>Tax</div>
										<div>PKR {cart.tax.toFixed(2)}</div>
									</Row>
								</ListGroup.Item>

								<ListGroup.Item as='li'>
									<Row>
										<div>
											<strong>OrderTotal</strong>
										</div>
										<div>
											<strong>PKR {cart.totalPrice.toFixed(2)}</strong>
										</div>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item as='li'>
									<Button
										size='lg'
										block
										variant='outline-secondary'
										type='submit'
										onClick={placeOrderHandler}
										className='primary block'
										disabled={cart.cartItems.length === 0}
									>
										Place order
									</Button>
								</ListGroup.Item>
								{loading && <LoaderComp></LoaderComp>}
								{err && <MessageComp variant='danger'>{err}</MessageComp>}
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
		<div><Footer/></div>
		</div>
	);
};

export default PlaceorderPage;
