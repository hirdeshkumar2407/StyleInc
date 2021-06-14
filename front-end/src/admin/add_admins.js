import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import './admin_dasboard.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
export class add_admins extends Component {
	render() {
		return (
			<>
				<Navbar />
				<div id='layoutSidenav'>
					<Sidebar />

					<div id='layoutSidenav_content'>
						<div>
							<main>
								<h1 style={{ textAlign: 'center' }}>Add Admin</h1>
								<form
									className='form-horizontal'
									style={{ paddingLeft: '600px', paddingRight: '10px' }}
								>
									<fieldset>
										<div className='control-group'>
											{/* Username */}
											<label className='control-label' htmlFor='username'>
												Username
											</label>
											<div className='controls'>
												<input
													type='text'
													id='username'
													name='username'
													placeholder
													className='input-xlarge'
												/>
												<p className='help-block'>
													Username can contain any letters or numbers, without spaces
												</p>
											</div>
										</div>

										<div className='control-group'>
											{/* E-mail */}

											<div className='controls'>
												<input
													type='text'
													id='email'
													name='email'
													placeholder
													className='input-xlarge'
												/>
												<p className='help-block'>Please provide your E-mail</p>
											</div>
										</div>

										<div className='control-group'>
											{/* Password*/}
											<label className='control-label' htmlFor='password'>
												Password
											</label>
											<div className='controls'>
												<input
													type='password'
													id='password'
													name='password'
													placeholder
													className='input-xlarge'
												/>
												<p className='help-block'>Password should be at least 4 characters</p>
											</div>
										</div>
										<div className='control-group'>
											{/* Password */}
											<label className='control-label' htmlFor='password_confirm'>
												Password (Confirm)
											</label>
											<div className='controls'>
												<input
													type='password'
													id='password_confirm'
													name='password_confirm'
													placeholder
													className='input-xlarge'
												/>
												<p className='help-block'>Please confirm password</p>
											</div>
										</div>
										<div className='control-group'>
											{/* Button */}
											<div className='controls'>
												<button className='btn btn-success'>Register</button>
											</div>
										</div>
									</fieldset>
								</form>
							</main>
							<footer className='py-4 bg-light mt-auto' />
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default add_admins;
