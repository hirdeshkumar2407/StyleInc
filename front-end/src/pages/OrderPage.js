import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoaderComp from '../components/LoaderComp';
import MessageComp from '../components/MessageComp';
import { detailsOrder } from '../redux/actions/orderActions';
import { Row, Col, Card, ListGroup, Nav, Figure } from 'react-bootstrap';
import './background.css';
import Header from '../components/partials/Header';
import NavMN from '../components/partials/NavbarMenWomen'
import Footer from '../components/partials/Footer'
const OrderPage = (props) => {
	const orderId = props.match.params.id;
	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, loading, err } = orderDetails;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(detailsOrder(orderId));
	}, [dispatch, orderId]);
	//console.log(order);
	return loading ? (
		<LoaderComp></LoaderComp>
	) : err ? (
		<MessageComp variant='danger'>{err}</MessageComp>
	) : (
		<div>
		
		<div><Header/></div>
			<div><NavMN/></div>
			<div>
				<Row style={{ padding: '20px' }}>
					<Col>
						<ListGroup as='ul'>
							<ListGroup.Item as='li'>
								<Card>
									<Card.Body>
										<Card.Title>Shipping</Card.Title>
									</Card.Body>
									<Card.Text>
										<strong>Name:</strong> {order.shippingAddress.fullname} <br />
										<strong>Address:</strong>
										{order.shippingAddress.address},{order.shippingAddress.city},
										{order.shippingAddress.postalCode},{order.shippingAddress.country}
									</Card.Text>
								</Card>
							</ListGroup.Item>

							<ListGroup.Item>
								<Card>
									<Card.Body>
										<Card.Title>Payment</Card.Title>
									</Card.Body>
									<Card.Text>
										<strong>Card Number:</strong> {order.paymentDetails.debitcard_no}
									</Card.Text>
								</Card>
							</ListGroup.Item>

							<ListGroup.Item>
								<Card>
									<Card.Body>
										<Card.Title>Order Items</Card.Title>
										<ListGroup as='ul'>
											{order.orderItems.map((item) => (
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
															<Nav.Link to={`/product/${item.product}`}>
																{item.name}
															</Nav.Link>
														</div>

														<div>
															{item.qty} X PKR{item.price}= PKR {item.qty * item.price}{' '}
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
											<div>PKR {order.itemsPrice.toFixed(2)}</div>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item as='li'>
										<Row>
											<div>Shipping Cost</div>
											<div>PKR {order.shippingPrice.toFixed(2)}</div>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item as='li'>
										<Row>
											<div>Tax</div>
											<div>PKR {order.tax.toFixed(2)}</div>
										</Row>
									</ListGroup.Item>

									<ListGroup.Item as='li'>
										<Row>
											<div>
												<strong>OrderTotal</strong>
											</div>
											<div>
												<strong>PKR {order.totalPrice.toFixed(2)}</strong>
											</div>
										</Row>
									</ListGroup.Item>
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

export default OrderPage;
