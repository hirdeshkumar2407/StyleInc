import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoaderComp from '../components/LoaderComp';
import MessageComp from '../components/MessageComp';
import { adminSignIn } from '../redux/actions/adminActions';
import './admin_login.css';
const AdminloginPage = (props) => {
	const [email, setuserEmail] = useState('');
	const [password, setuserPassword] = useState('');

	const adminSignin = useSelector((state) => state.adminSignin);
	const { adminDetails, loading, err } = adminSignin;
	const dispatch = useDispatch();

	useEffect(() => {
		if (adminDetails) {
			console.log(adminDetails);
			props.history.push('/dashboard');
		}
	}, [adminDetails, props.history]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(adminSignIn(email, password));
	};
	return (
		<div className='maincontainer'>
			<div className='container-fluid'>
				<div className='row no-gutter'>
					<div className='col-md-6 d-none d-md-flex bg-image'></div>

					<div className='col-md-6 bg-light'>
						<div className='login d-flex align-items-center py-5'>
							<div className='container'>
								<div className='row'>
									<div className='col-lg-10 col-xl-7 mx-auto'>
										<h3 className='display-4'>Admin Login</h3>
										{loading && <LoaderComp></LoaderComp>}
										{err && <MessageComp variant='danger'>{err}</MessageComp>}

										<form onSubmit={handleSubmit}>
											<div className='form-group mb-3'>
												<input
													id='email'
													type='email'
													placeholder='Email address'
													required
													autofocus=''
													className='form-control rounded-pill border-0 shadow-sm px-4'
													onChange={(e) => setuserEmail(e.target.value)}
												/>
											</div>
											<div className='form-group mb-3'>
												<input
													id='password'
													type='password'
													placeholder='Password'
													required
													className='form-control rounded-pill border-0 shadow-sm px-4 text-primary'
													onChange={(e) => setuserPassword(e.target.value)}
												/>
											</div>

											<button
												type='submit'
												className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm'
											>
												Sign in
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AdminloginPage;
