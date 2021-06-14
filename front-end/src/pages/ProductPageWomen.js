import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { womenProductDetails } from '../redux/actions/productActions';
import LoaderComp from '../components/LoaderComp';
import MessageComp from '../components/MessageComp';
import { Button, Row, Col, Card, Form, ListGroup, Nav, Figure } from 'react-bootstrap';
import Header from '../components/partials/Header';
import NavMN from '../components/partials/NavbarMenWomen'
import Footer from '../components/partials/Footer'
const ProductPageWomen = (props) => {
	const dispatch = useDispatch();
	const product_id = props.match.params.id;
	const [qty, setQty] = useState(1);
	const productWomenDetails = useSelector((state) => state.productWomenDetails);
	const { err, loading, product } = productWomenDetails;
	useEffect(() => {
		dispatch(womenProductDetails(product_id));
	}, [dispatch, product_id]);
	const handleAddToCart = () => {
		props.history.push(`/cartf/${product_id}?qty=${qty}`);
	};
	return (
		<div>
			
		<div><Header/></div>
			<div><NavMN/></div>
			<div className='justify-content-md-center'>
				{loading ? (
					<LoaderComp></LoaderComp>
				) : err ? (
					<MessageComp variant='danger'>{err}</MessageComp>
				) : (
					<div>
						<Nav.Link href='/women'>Back</Nav.Link>
						<Row>
							<Col xs={6}>
								<div>
									<Figure>
										<Figure.Image width={500} height={300} src={product.image} alt={product.name} />
									</Figure>
								</div>
								<div>
									<ListGroup as='ul'>
										<ListGroup.Item as='li'>
											<h6>{product.name}</h6>
											<h6>
												Pirce: <h7>PKR {product.price}</h7>
											</h6>
										</ListGroup.Item>
									</ListGroup>
								</div>
							</Col>
							<Col style={{ paddingRight: '200px', marginTop: '40px' }} xs={6}>
								<Card>
									<Card.Body>
										<ListGroup as='ul'>
											<ListGroup.Item as='li'>
												<Row>
													<Col>
														<h6>Price:</h6>
													</Col>
													<Col>
														<div className='price'>PKR {product.price}</div>
													</Col>
												</Row>
											</ListGroup.Item>

											<ListGroup.Item as='li'>
												<Row>
													<Col>
														<h6>Status:</h6>
													</Col>
													<Col>
														{product.inStock > 0 ? (
															<span style={{ color: '#20a020' }}>In Stock</span>
														) : (
															<span style={{ color: '#d40b0b' }}>Unavailable</span>
														)}
													</Col>
												</Row>
											</ListGroup.Item>

											{product.inStock > 0 && (
												<>
													<ListGroup.Item as='li'>
														<Row>
															<Col>
																<h6>QTY</h6>
															</Col>
															<Col>
																<Form.Control
																	as='select'
																	value={qty}
																	onChange={(e) => setQty(e.target.value)}
																>
																	{[...Array(product.inStock).keys()].map((a) => (
																		<option key={a + 1} value={a + 1}>
																			{a + 1}
																		</option>
																	))}
																</Form.Control>
															</Col>
														</Row>
													</ListGroup.Item>
													<ListGroup.Item as='li'>
														<Button
															onClick={handleAddToCart}
															size='lg'
															block
															variant='outline-secondary'
														>
															{' '}
															Add to Cart{' '}
														</Button>
													</ListGroup.Item>
												</>
											)}
										</ListGroup>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</div>
				)}
			</div>
			<div><Footer/></div>
		</div>
	);
};

export default ProductPageWomen;
