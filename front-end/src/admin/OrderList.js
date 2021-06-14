import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoaderComp from '../components/LoaderComp';
import MessageComp from '../components/MessageComp';
import { listOrders, deleteOrder } from '../redux/actions/orderActions';
import { actionTypes_O } from '../redux/constants/orderConstants';
import { Table, Button } from 'react-bootstrap';
import './admin_dasboard.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
function OrderList(props) {
	const orderList = useSelector((state) => state.orderList);
	const { loading, err, orders } = orderList;
	const orderDelete = useSelector((state) => state.orderDelete);
	const { loading: loadingDelete, err: errDelete, success: successDelete } = orderDelete;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: actionTypes_O.ORDER_DELETE_RESET });
		dispatch(listOrders());
	}, [dispatch, successDelete]);

	const orderDeleteHandler = (order) => {
		if (window.confirm('Are you sure to Delete')) {
			dispatch(deleteOrder(order._id));
		}
	};
	return (
		<>
			<Navbar />
			<div id='layoutSidenav'>
				<Sidebar />
				<div> </div>
				<div id='layoutSidenav_content' style={{ paddingLeft: '10px', paddingRight: '10px' }}>
					<div>
						<main>
							<h1 style={{ textAlign: 'center' }}>Orders</h1>
							{loadingDelete && <LoaderComp></LoaderComp>}
							{errDelete && <MessageComp variant='danger'></MessageComp>}
							{loading ? (
								<LoaderComp></LoaderComp>
							) : err ? (
								<MessageComp variant='danger'>{err}</MessageComp>
							) : (
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>ID</th>
											<th>User</th>
											<th>Date</th>
											<th>Total</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										{orders.map((order) => (
											<tr key={order._id}>
												<td>{order._id}</td>
												<td>{order.name}</td>
												<td>{order.order_date.substring(0, 10)}</td>
												<td>{order.totalPrice.toFixed(2)}</td>
												<td className='col text-center'>
													<Button
														variant='outline-dark'
														onClick={() => {
															props.history.push(`/dashboard/order/${order._id}/details`);
														}}
													>
														Details
													</Button>
												</td>
												<td className='col text-center'>
													<Button
														variant='outline-dark'
														onClick={() => {
															orderDeleteHandler(order);
														}}
													>
														Delete
													</Button>
												</td>
											</tr>
										))}
									</tbody>
								</Table>
							)}
						</main>
						<footer className='py-4 bg-light mt-auto' />
					</div>
				</div>
			</div>
		</>
	);
}

export default OrderList;
