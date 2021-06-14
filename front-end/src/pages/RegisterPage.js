/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoaderComp from '../components/LoaderComp';
import MessageComp from '../components/MessageComp';
import { register } from '../redux/actions/userActions';
import { Button, Container, Row, Col, Card, Body, Title, Form } from 'react-bootstrap';
import './background.css';
import Header from '../components/partials/Header';
import NavMN from '../components/partials/NavbarMenWomen'
import Footer from '../components/partials/Footer'
const RegisterPage = (props) => {
	const [name, setuserName] = useState('');
	const [email, setuserEmail] = useState('');
	const [password, setuserPassword] = useState('');
	const [confirmPassword, setuserConfirmPassword] = useState('');
	const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

	const userRegister = useSelector((state) => state.userRegister);
	const { userDetails, loading, err } = userRegister;

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert('Password  amd Confirm Password are not Equal');
		} else {
			dispatch(register(name, email, password));
		}
	};
	useEffect(() => {
		if (userDetails) {
			props.history.push(redirect);
		}
	}, [props.history, redirect, userDetails]);
	return (
		<div>
		<div><Header/></div>
			<div><NavMN/></div>
		<div className='regbgg-image hid'>
				<Row className='justify-content-md-center regClass'>
				<Col xs lg='4' >
					<Card style={{ width: '25rem' }}>
						<Card.Body>
							<Card.Title style={{textAlign:'center'}}>Registration</Card.Title>
							{loading && <LoaderComp></LoaderComp>}
							{err && <MessageComp variant='danger'>{err}</MessageComp>}

							<Form onSubmit={handleSubmit}>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>User Name</Form.Label>
									<Form.Control
										type='text'
										id='name'
										placeholder='Enter user name'
										required
										onChange={(e) => setuserName(e.target.value)}
									/>
								</Form.Group>

								<Form.Group controlId='formBasicPassword'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='email'
										id='email'
										placeholder='Enter user email'
										required
										onChange={(e) => setuserEmail(e.target.value)}
									/>
									<Form.Text className='text-muted'>
										We'll never share your email with anyone else.
									</Form.Text>
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

								<Form.Group controlId='formBasicPassword'>
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control
										type='password'
										id='confirmPassword'
										placeholder='Enter user Confirm Password'
										required
										onChange={(e) => setuserConfirmPassword(e.target.value)}
									/>
								</Form.Group>

								<Button size='lg'
										block
										variant="outline-info"
										type='submit'>
									Register
								</Button>
								<p>
									Already have an account ? <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
								</p>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
		<div><Footer/></div>
		</div>
	);
};

export default RegisterPage;
