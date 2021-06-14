/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoaderComp from '../components/LoaderComp';
import MessageComp from '../components/MessageComp';
import { listOrderCustomer } from '../redux/actions/orderActions';
import { Button, Row, Col, Card, ListGroup, Nav, Figure, Table } from 'react-bootstrap';
import Header from '../components/partials/Header';
import NavMN from '../components/partials/NavbarMenWomen'
import Footer from '../components/partials/Footer'
const OrderHistoryPage = (props) => {
	const orderCustomerList = useSelector((state) => state.orderCustomerList);
	const { loading, err, orders } = orderCustomerList;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listOrderCustomer());
	}, [dispatch]);
	return (
		<div>
		<div><Header/></div>
			<div><NavMN/></div>
		<div>
			<h1>Order History</h1>
			{loading ? (
				<LoaderComp></LoaderComp>
			) : err ? (
				<MessageComp variant='danger'>{err}</MessageComp>
			) : (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>ID</th>
							<th>DATE</th>
							<th>TOTAL</th>
							<th>ACTIONS</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr key={order._id}>
								<td>{order._id}</td>
								<td>{order.order_date.substring(0, 10)}</td>
								<td>{order.totalPrice.toFixed(2)}</td>
								<td>
									<Button
										type='Submit'
										variant='outline-secondary'
										onClick={() => {
											props.history.push(`/order/${order._id}`);
										}}
									>
										Details
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</div>
		<div><Footer/></div>
		</div>
	);
};

export default OrderHistoryPage;
