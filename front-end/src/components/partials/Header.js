import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signout } from '../../redux/actions/userActions';
import LOGO from '../../Logo/Logo.png';
import { Navbar, Nav, Form, Dropdown, ButtonGroup, Image } from 'react-bootstrap';

export default function Header() {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const userSignin = useSelector((state) => state.userSignin);
	const { userDetails } = userSignin;
	const dispatch = useDispatch();
	const handleSignout = () => {
		dispatch(signout());
	};
	return (
	<>
		<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
		integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
		crossorigin="anonymous"	/>
		<Navbar className='navbar navbar-light bg-transparent'>
			<Navbar.Brand href='/' style={{ fontSize: '35px', fontWeight: '20px', fontFamily: 'sans-serif' }}>
				<Image src={LOGO} roundedCircle />
			</Navbar.Brand>
			<Nav className='mr-auto'></Nav>
			<Form inline>
				<Nav.Link href='/cart'>
					<div>
						<span
							className='iconify '
							data-icon='mdi:cart-variant'
							data-inline='false'
							style={{ fontSize: '30px', color: 'grey' }}
						></span>
						{cartItems.length > 0 && (
							<span className='cartBadge' style={{ color: 'darkkhaki' }}>
								{cartItems.length}
							</span>
						)}
					</div>
				</Nav.Link>
				<div className='mb-2'>
					{['left'].map((direction) => (
						<Dropdown
							as={ButtonGroup}
							key={direction}
							id={`dropdown-button-drop-${direction}`}
							drop={direction}
							menuAlign='left'
						>
							<Dropdown.Toggle id='dropdown-custom-1' variant='Success'>
								<span
									class='iconify'
									data-icon='bi:person-lines-fill'
									data-inline='false'
									style={{ fontSize: '25px' }}
								></span>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{userDetails ? (
									<>
										<Dropdown.Item href='/profile'>User Profile</Dropdown.Item>
										<Dropdown.Item href='/orderhistory'>Order History</Dropdown.Item>
										<Dropdown.Item href='/signin' onClick={handleSignout}>
											SignOut
										</Dropdown.Item>
									</>
								) : (
									<>
										<Dropdown.Item href='/signin'>Signin</Dropdown.Item>
										<Dropdown.Item href='/register'>Register</Dropdown.Item>
									
									</>
								)}
							</Dropdown.Menu>
						</Dropdown>
					))}
				</div>
			</Form>
		</Navbar>
</>
	);
}
