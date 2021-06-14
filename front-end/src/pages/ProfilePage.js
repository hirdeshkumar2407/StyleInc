import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../redux/actions/userActions';
import LoaderComp from '../components/LoaderComp';
import MessageComp from '../components/MessageComp';
import { actionTypes_U } from '../redux/constants/userConstants';

import { Button, Row, Col, Card, Body, Title, Form } from 'react-bootstrap';
import './background.css';
import Header from '../components/partials/Header';
import NavMN from '../components/partials/NavbarMenWomen';
import Footer from '../components/partials/Footer';
const ProfilePage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const userSignin = useSelector((state) => state.userSignin);
	const { userDetails } = userSignin;
	const userInfo = useSelector((state) => state.userInfo);
	const { loading, err, user } = userInfo;
	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { loading: loadingUpdate, success: successUpdate, err: errUpdate } = userUpdateProfile;
	const dispatch = useDispatch();
	useEffect(() => {
		if (!user) {
			dispatch({ type: actionTypes_U.USER_UPDATE_PROFILE_RESET });
			dispatch(detailsUser(userDetails._id));
		} else {
			setName(user.name);
			setEmail(user.email);
		}
	}, [dispatch, userDetails._id, user]);

	const handleProfileSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert('Password and Confirm Password are not matched');
		} else {
			dispatch(
				updateUserProfile({
					userId: user._id,
					name,
					email,
					password,
				})
			);
		}
	};
	return (
		<div>
			<div>
				<Header />
			</div>
			<div>
				<NavMN />
			</div>
			<div className='regbgg-image hid'>
				<Row className='justify-content-md-center regClass'>
					<Col xs lg='4'>
						<Card style={{ width: '35rem' }}>
							<Card.Body>
								<Card.Title style={{ textAlign: 'center' }}> Update Profile</Card.Title>
								<Form onSubmit={handleProfileSubmit}>
									{loading ? (
										<LoaderComp></LoaderComp>
									) : err ? (
										<MessageComp variant='danger'>{err}</MessageComp>
									) : (
										<>
											{loadingUpdate && <LoaderComp></LoaderComp>}
											{errUpdate && <MessageComp variant='danger'>{errUpdate}</MessageComp>}
											{successUpdate && (
												<MessageComp variant='green'>Profile Updated Successfully</MessageComp>
											)}

											<Form.Group controlId='formBasicEmail'>
												<Form.Label>User Name</Form.Label>
												<Form.Control
													type='text'
													id='name'
													placeholder='Enter Name'
													value={name}
													onChange={(e) => {
														setName(e.target.value);
													}}
												/>
											</Form.Group>

											<Form.Group controlId='email'>
												<Form.Label>Email</Form.Label>
												<Form.Control
													type='email'
													id='email'
													placeholder='Enter Email'
													value={email}
													onChange={(e) => {
														setEmail(e.target.value);
													}}
												/>
											</Form.Group>

											<Form.Group controlId='formBasicPassword'>
												<Form.Label>Password</Form.Label>
												<Form.Control
													type='password'
													id='password'
													placeholder='Enter user password'
													onChange={(e) => {
														setPassword(e.target.value);
													}}
												/>
											</Form.Group>

											<Form.Group controlId='formBasicPassword'>
												<Form.Label>Confirm Password</Form.Label>
												<Form.Control
													type='password'
													id='confirmPassword'
													placeholder='Enter confirm password'
													onChange={(e) => {
														setConfirmPassword(e.target.value);
													}}
												/>
											</Form.Group>

											<Button size='lg' block variant='outline-info' type='submit'>
												Update
											</Button>
										</>
									)}
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default ProfilePage;
