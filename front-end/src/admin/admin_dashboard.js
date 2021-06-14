/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */

import './admin_dasboard.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import axios from 'axios';
import React, { useState } from 'react';
import './add_mensCloths.css';
function admin_dashboard() {
	const [name, setName] = useState('');
	const [image, setImage] = useState('');

	const onFormSubmit = () => {
		const formData = new FormData();
		formData.append('name', name);
		formData.append('image', image);
		const url = 'http://localhost:5000/api/carousel/addCarousel';
		axios.post(url, formData, {}).then((res) => {
			console.log(res.statusText);
		});
		setName('');
		setImage('');
	};

	const onInputNameChange = (e) => {
		setName(e.target.value);
	};

	const onInputImageChange = (e) => {
		setImage(e.target.files[0]);
	};
	return (
		<>
			<Navbar />

			<div id='layoutSidenav'>
				<Sidebar />

				<div id='layoutSidenav_content'>
					<main>
						<div >
							
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default admin_dashboard;
