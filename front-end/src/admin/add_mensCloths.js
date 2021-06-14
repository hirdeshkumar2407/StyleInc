/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, Component } from 'react';
import './admin_dasboard.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import axios from 'axios';

import './add_mensCloths.css';

function add_admins(props) {
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [inStock, setinStock] = useState('');
	const [brand, setBrand] = useState('');
	const [size, setSize] = useState('');
	const [image, setImage] = useState('');

	const onFormSubmit = () => {
		const formData = new FormData();
		formData.append('name', name);
		formData.append('category', category);
		formData.append('price', price);
		formData.append('inStock', inStock);
		formData.append('brand', brand);
		formData.append('size', size);
		formData.append('image', image);
		const url = '/api/menclothes/addmenclothes';
		axios.post(url, formData, {}).then((res) => {
			console.log(res.statusText);
		});
		setName('');
		setImage('');
		setCategory();
		setPrice('');
		setinStock('');
		setBrand('');
		setSize('');
		props.history.push('/dashboard/men/list');
	};

	const onInputNameChange = (e) => {
		setName(e.target.value);
	};

	const onInputCategoryChange = (e) => {
		setCategory(e.target.value);
	};

	const onInputPriceChange = (e) => {
		setPrice(e.target.value);
	};

	const onInputinStockChange = (e) => {
		setinStock(e.target.value);
	};

	const onInputBrandChange = (e) => {
		setBrand(e.target.value);
	};
	const onInputSizeChange = (e) => {
		setSize(e.target.value);
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
					<div>
						<main>
							<div className='containerr'>
								<h1>Add Men Clothes</h1>
								<form>
									<label>Name</label>
									<input className='inputtextt' type='text' name='name' onChange={onInputNameChange} />

									<label>Category</label>
									<input className='inputtextt' type='text' name='name' onChange={onInputCategoryChange} />

									<label>Price</label>
									<input className='inputtextt' type='text' name='name' onChange={onInputPriceChange} />

									<label>Stock</label>
									<input className='inputtextt' type='text' name='name' onChange={onInputinStockChange} />

									<label>Brand</label>
									<input className='inputtextt' type='text' name='name' onChange={onInputBrandChange} />

									<label>Size</label>
									<input className='inputtextt' type='text' name='name' onChange={onInputSizeChange} />

									<label>Upload a the Image</label>
									<input className='inputtextt2 ' type='file' name='image' onChange={onInputImageChange} />
									<button className='sumbitbutton' onClick={onFormSubmit} type='submit'>
										Submit
									</button>
								</form>
							</div>
						</main>
						<footer className='py-4 bg-light mt-auto' />
					</div>
				</div>
			</div>
		</>
	);
}

export default add_admins;
