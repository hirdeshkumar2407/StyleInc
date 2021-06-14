/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
function NavbarMenWomen() {
	return (
		<div>
			<nav
				className='navbar navbar-dark bg-dark'
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<a className='navbar-brand mb-1 h5' href='/men'>
					Men
				</a>
        <a className='navbar-brand mb-1 h5' >
				|
				</a>
				<a className='navbar-brand mb-1 h5' href='/women'>
					Women
				</a>
			</nav>
		</div>
	);
}

export default NavbarMenWomen;