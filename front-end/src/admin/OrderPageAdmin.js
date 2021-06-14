import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoaderComp from '../components/LoaderComp';
import MessageComp from '../components/MessageComp';
import { detailsAdminOrder } from '../redux/actions/orderActions';

const OrderPageAdmin = (props) => {
	const orderId = props.match.params.id;
	const orderAdminDetails = useSelector((state) => state.orderAdminDetails);
	const { order, loading, err } = orderAdminDetails;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(detailsAdminOrder(orderId));
	}, [dispatch, orderId]);
	//console.log(order);
	return loading ? (
		<LoaderComp></LoaderComp>
	) : err ? (
		<MessageComp variant='danger'>{err}</MessageComp>
	) : (
		<div >
			<h1 style={{border:"2px solid"}}> Order details ID: {order._id}  </h1>
			<div style={{backgroundColor:"#EEEEEE"}} className='row top'>
				<div style={{width:"800px",listStylePosition:"outside"}} className='col-2'>
					<ul>
						<li >
							<div  className='card card-body'>
								<h2>Shipping</h2>
								<p>
									<strong>Name:</strong> {order.shippingAddress.fullname} <br />
									<strong>Address:</strong>
									{order.shippingAddress.address},{order.shippingAddress.city},{order.shippingAddress.postalCode},
									{order.shippingAddress.country}
								</p>
							</div>
						</li>
						<li>
							<div  className='card card-body'>
								<h2>Payment </h2>
								<p>
									<strong>Debit Card Number:</strong> {order.paymentDetails.debitcard_no}
								</p>
							</div>
						</li>
						<li>
							<div className='card card-body'>
								<h2>Order Items </h2>
								<ul>
									{order.orderItems.map((item) => (
										<li key={item.product}>
											<div className='row'>
												<div>
													<img src={item.image} alt={item.image} className='small' style={{width:"80px",height:"100px"}} />
												</div>
												<div className='min-30'>
													<Link to={`/product/${item.product}`}>{item.name}</Link>
												</div>
												<div>
													{item.qty} X PKR{item.price}= PKR {item.qty * item.price}{' '}
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<div className='col-2'>
					<div style={{width:"500px",listStylePosition:"outside",height:"300px"}} className='card card-body'>
						<ul>
							
								<h2>Order Summary</h2>
						
							<li>
								<div className='row'>
									<div>Items</div>
									<div>PKR {order.itemsPrice.toFixed(2)}</div>
								</div>
							</li>
							<li>
								<div className='row'>
									<div>Shipping Cost</div>
									<div>PKR {order.shippingPrice.toFixed(2)}</div>
								</div>
							</li>
							<li>
								<div className='row'>
									<div>Tax</div>
									<div>PKR {order.tax.toFixed(2)}</div>
								</div>
							</li>
							
								<div className='row'>
									<h2>
										Total
									</h2>
									<h2>
										<strong>PKR {order.totalPrice.toFixed(2)}</strong>
										</h2>
								</div>
							
						</ul>
					</div>
				</div>
	
			</div>
		</div>
	);
};

export default OrderPageAdmin;
