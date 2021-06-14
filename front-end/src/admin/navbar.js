import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminSignout } from '../redux/actions/adminActions';
import './admin_dasboard.css';
function Top_navbar() {
	const dispatch = useDispatch();
	const handleSignout = () => {
		dispatch(adminSignout());
	};
	return (
		<div>
			{/* Top NavBar */}
			<nav className='sb-topnav navbar navbar-expand navbar-dark bg-dark'>
				{/* Navbar Brand*/}
				<div>''</div>
				<button className='btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0' id='sidebarToggle' to='#!'>
					<i className='fas fa-bars' />
				</button>

				<Link className='navbar-brand ps-3' to='/dashboard'>
					Admin Dashboard
				</Link>

				<form className='d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0'></form>
				{/* Navbar*/}
				<ul className='navbar-nav ms-auto ms-md-0 me-3 me-lg-4'>
					<li className='nav-item dropdown'>
						<Link
							to='#'
							className='nav-link dropdown-toggle'
							id='navbarDropdown'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							<i className='fas fa-user fa-fw' />
						</Link>
						<ul className='dropdown-menu dropdown-menu-end' aria-labelledby='navbarDropdown'>
							<li>
								<Link className='dropdown-item' to='/adminsignin' onClick={handleSignout}>
									Logout
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Top_navbar;
