import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoaderComp from '../components/LoaderComp';
import MessageComp from '../components/MessageComp';
import { deleteUser, listUsers } from '../redux/actions/userActions';
import { actionTypes_U } from '../redux/constants/userConstants';

import { Table, Button } from 'react-bootstrap';
import './admin_dasboard.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
function UserList(props) {
	const userList = useSelector((state) => state.userList);
	const { loading, err, users } = userList;
	const userDelete = useSelector((state) => state.userDelete);
	const { loading: loadingDelete, err: errDelete, success: successDelete } = userDelete;
	const dispatch = useDispatch();

	useEffect(() => {
		//dispatch({ type: actionTypes_U.USER_DELETE_RESET });
		dispatch(listUsers());
		dispatch({ type: actionTypes_U.USER_DETAILS_RESET });
	}, [dispatch, successDelete, errDelete]);

	const userDeleteHandler = (user) => {
		if (window.confirm('Are you sure to Delete')) {
			dispatch(deleteUser(user._id));
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
							<h1 style={{ textAlign: 'center' }}>Users List</h1>
							{loadingDelete && <LoaderComp></LoaderComp>}
							{errDelete && <MessageComp variant='danger'>{errDelete}</MessageComp>}
							{loading ? (
								<LoaderComp></LoaderComp>
							) : err ? (
								<MessageComp variant='danger'>{err}</MessageComp>
							) : (
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>ID</th>
											<th>NAME</th>
											<th>EMAIL</th>

											<th>ACTIONS</th>
										</tr>
									</thead>
									<tbody>
										{users.map((user) => (
											<tr key={user._id}>
												<td>{user._id}</td>
												<td>{user.name}</td>
												<td>{user.email}</td>

												<td className='col text-center'>
													<Button
														style={{ paddingLeft: '' }}
														variant='outline-dark'
														onClick={() => props.history.push(`/dashboard/users/${user._id}/edit`)}
													>
														Update
													</Button>
												</td>
												<td className='col text-center'>
													<Button
														variant='outline-dark'
														onClick={() => {
															userDeleteHandler(user);
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

export default UserList;
