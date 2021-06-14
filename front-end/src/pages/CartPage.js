import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MessageComp from '../components/MessageComp';
import { Button, Row, Col, Card, ListGroup, Nav, Figure, Table } from 'react-bootstrap';
import { addToCart, removeCart } from '../redux/actions/cartActions';
import Header from '../components/partials/Header';
import NavMN from '../components/partials/NavbarMenWomen'
import Footer from '../components/partials/Footer'
import './background.css';

const CartPage = (props) => {
	const product_id = props.match.params.id;
	const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const dispatch = useDispatch();
	useEffect(() => {
		if (product_id) {
			dispatch(addToCart(product_id, qty));
		}
	}, [dispatch, product_id, qty]);
	const removecartHander = (product_id) => {
		dispatch(removeCart(product_id));
	};
	const checkoutHandler = () => {
		props.history.push('/signin?redirect=shipping');
	};
	return (

		<div>

			<div><Header/></div>
			<div><NavMN/></div>

		<div>
			<h1 style={{ textAlign: 'center' }}>CART LIST</h1>

			<Row style={{ padding: '40px' }}>
				<Col>
					{cartItems.length === 0 ? (
						<Card style={{ width: '15rem' }}>
							<Card.Body>
								<MessageComp>
									Cart is empty. <Link to='/'>Proceed to Shopping</Link>
								</MessageComp>
							</Card.Body>
						</Card>
					) : (
						<Table responsive>
							{cartItems.map((item) => (
								<tbody key={item.product}>
									<tr>
										<td>
											<Figure>
												<Figure.Image
													width={100}
													height={200}
													src={item.image}
													alt={item.image}
												/>
												<Figure.Caption style={{ textAlign: 'center' }}>
													<Nav.Link href={`/productm/${item.product}`}>{item.name}</Nav.Link>
													<Nav.Item>Price: {item.price}</Nav.Item>
												</Figure.Caption>
											</Figure>
										</td>

										<td style={{ padding: '100px' }}>
											<select
												value={item.qty}
												onChange={(e) =>
													dispatch(addToCart(item.product, Number(e.target.value)))
												}
												style={{ height: '30px', width: '80px' }}
											>
												{[...Array(item.inStock).keys()].map((a) => (
													<option key={a + 1} value={a + 1}>
														{a + 1}
													</option>
												))}
											</select>
										</td>
										<td style={{ padding: '80px' }}>
											<Button
												variant='outline-info'
												size='lg'
												block
												type='button'
												onClick={() => {
													removecartHander(item.product);
												}}
											>
												Delete
											</Button>
										</td>
									</tr>
								</tbody>
							))}
						</Table>
					)}
				</Col>

				<Col style={{ marginLeft: '200px' }}>
					<Card style={{ width: '22rem' }}>
						<Card.Body>
							<Card.Title style={{ textAlign: 'center' }}>Total</Card.Title>

							<ListGroup as='ul'>
								<ListGroup.Item as='li'>
									<h2 style={{ fontSize: '1.2rem', padding: '1rem 0' }}>
										SUBTOTAL ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : PK
										{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
									</h2>
								</ListGroup.Item>
								<ListGroup.Item as='li'>
									<Button
										onClick={checkoutHandler}
										disabled={cartItems.length === 0}
										size='lg'
										block
										variant='outline-secondary'
										type='submit'
									>
										Proceed to Checkout
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
		<div><Footer/></div>
		</div>
		// <div className='row top'>
		// 	<div className='col-2'>
		// 		<h1>CART LIST</h1>
		// 		{cartItems.length === 0 ? (
		// 			<MessageComp>
		// 				Cart is empty. <Link to='/'>Proceed to Shopping</Link>
		// 			</MessageComp>
		// 		) : (
		// 			<ul>
		// 				{cartItems.map((item) => (
		// 					<li key={item.product}>
		// 						<div className='row'>
		// 							<div>
		// 								<img src={item.image} alt={item.image} className='small' />
		// 							</div>
		// 							<div className='min-30'>
		// 								<Link to={`/product/${item.product}`}>{item.name}</Link>
		// 							</div>
		// 							<div>
		// 								<select
		// 									value={item.qty}
		// 									onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
		// 								>
		// 									{[...Array(item.inStock).keys()].map((a) => (
		// 										<option key={a + 1} value={a + 1}>
		// 											{a + 1}
		// 										</option>
		// 									))}
		// 								</select>
		// 							</div>
		// 							<div>{item.price}</div>
		// 							<div>
		// 								<button
		// 									className='button'
		// 									onClick={() => {
		// 										removecartHander(item.product);
		// 									}}
		// 								>
		// 									Delete
		// 								</button>
		// 							</div>
		// 						</div>
		// 					</li>
		// 				))}
		// 			</ul>
		// 		)}
		// 	</div>
		// 	<div className='col-1'>
		// 		<div className='card card-body'>
		// 			<ul>
		// 				<li>
		// 					<h2>
		// 						SUBTOTAL ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : PK
		// 						{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
		// 					</h2>
		// 				</li>
		// 				<li>
		// 					<button onClick={checkoutHandler} className='primary block' disabled={cartItems.length === 0}>
		// 						Proceed to Checkout
		// 					</button>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default CartPage;
