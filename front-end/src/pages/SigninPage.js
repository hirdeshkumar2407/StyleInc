/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoaderComp from '../components/LoaderComp';
import MessageComp from '../components/MessageComp';
import { signin } from '../redux/actions/userActions';
import { Button, Container, Row, Col, Card, Body, Title, Form } from 'react-bootstrap';
import './background.css';
import Header from '../components/partials/Header';
import NavMN from '../components/partials/NavbarMenWomen';
import Footer from '../components/partials/Footer';

const SigninPage = (props) => {
	const [email, setuserEmail] = useState('');
	const [password, setuserPassword] = useState('');
	const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

	const userSignin = useSelector((state) => state.userSignin);
	const { userDetails, loading, err } = userSignin;

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signin(email, password));
	};
	useEffect(() => {
		if (userDetails) {
			props.history.push(redirect);
		}
	}, [props.history, redirect, userDetails]);
	return (
		<div>
			<div>
				<Header />
			</div>
			<div>
				<NavMN />
			</div>
			<div className='signbgg-image hid'>
				<Row className='justify-content-md-center signClass'>
					<Col xs lg='4'>
						<Card style={{ width: '25rem' }}>
							<Card.Body>
								<Card.Title style={{ textAlign: 'center' }}>SignIn</Card.Title>
								{loading && <LoaderComp></LoaderComp>}
								{err && <MessageComp variant='danger'>{err}</MessageComp>}

								<Form onSubmit={handleSubmit}>
									<Form.Group controlId='formBasicEmail'>
										<Form.Label>Email</Form.Label>
										<Form.Control
											type='email'
											id='email'
											placeholder='Enter user email'
											required
											onChange={(e) => setuserEmail(e.target.value)}
										/>
									</Form.Group>

									<Form.Group controlId='formBasicPassword'>
										<Form.Label>Password</Form.Label>
										<Form.Control
											type='password'
											id='password'
											placeholder='Enter user Password'
											required
											onChange={(e) => setuserPassword(e.target.value)}
										/>
									</Form.Group>

									<Button size='lg' block variant='outline-info' type='submit'>
										SignIn
									</Button>
									<p>
										New Customer ? <Link to={`/register?redirect=${redirect}`}>Create Account</Link>
									</p>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
			<div><Footer/></div>
		</div>
		// <div>
		// 	<form className='form' onSubmit={handleSubmit}>
		// 		<div>Sign In</div>
		// 		{loading && <LoaderComp></LoaderComp>}
		// 		{err && <MessageComp variant='danger'>{err}</MessageComp>}
		// 		<div>
		// 			<label htmlFor='email'>Email Address</label>
		// 			<input

		// 			/>
		// 		</div>
		// 		<div>
		// 			<label htmlFor='password'>Password</label>
		// 			<input

		// 			/>
		// 		</div>
		// 		<div>
		// 			<label />
		// 			<button className='primary' type='submit'>
		// 				Sign In
		// 			</button>
		// 		</div>
		// 		<div>
		// 			<label />
		// 			<div>

		// 			</div>
		// 		</div>
		// 	</form>
		// </div>
	);
};

export default SigninPage;
