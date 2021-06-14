/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './admin_dasboard.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Axios from 'axios';

import './add_mensCloths.css';

function UpdateWomenClothes(props) {
	const product_id = props.match.params.id;
	const [id, setId] = useState();
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [inStock, setInStock] = useState('');
	const [brand, setBrand] = useState('');
	const [size, setSize] = useState('');
	const [image, setImage] = useState('');
	const [womenProduct, setWomenProduct] = useState('');

	const getWomenProduct = () => {
		Axios.get(`/api/womenclothes/${product_id}`).then((res) => {
			setWomenProduct(res.data);
			console.log(res.data);
			setName(res.data.name);
			setCategory(res.data.category);
			setPrice(res.data.price);
			setInStock(res.data.inStock);
			setBrand(res.data.brand);
			setSize(res.data.size);
		});
	};
	useEffect(() => {
		getWomenProduct();
	}, []);

	const onFormSubmit = (id) => {
		// id = '60c64d2c628c3c3bd4c3eb25';
		const formData = new FormData();
		formData.append('id', product_id);
		formData.append('name', name);
		formData.append('category', category);
		formData.append('price', price);
		formData.append('inStock', inStock);
		formData.append('brand', brand);
		formData.append('size', size);
		formData.append('image', image);
		const url = '/api/womenclothes/updateWomenClothes';
		Axios.put(url, formData, {}).then((res) => {
			console.log(res.statusText);
		});
		setName('');
		setImage('');
		setCategory();
		setPrice('');
		setInStock('');
		setBrand('');
		setSize('');
		props.history.push('/dashboard/women/list');
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

	const onInputInStockChange = (e) => {
		setInStock(e.target.value);
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
								<h1>Update Women Clothes</h1>
								<form>
									<label>Name</label>
									<input className='inputtextt' type='text' name='name' value={name} onChange={onInputNameChange} required />

									<label>Category</label>
									<input
										className='inputtextt'
										type='text'
										name='category'
										value={category}
										onChange={onInputCategoryChange}
										required
									/>

									<label>Price</label>
									<input className='inputtextt' type='text' name='price' value={price} onChange={onInputPriceChange} required />

									<label>In Stock</label>
									<input
										className='inputtextt'
										type='text'
										name='inStock'
										value={inStock}
										onChange={onInputInStockChange}
										required 
									/>
									<label>Brand</label>
									<input className='inputtextt' type='text' name='brand' value={brand} onChange={onInputBrandChange} required />

									<label>Size</label>
									<input className='inputtextt' type='text' name='size' value={size} onChange={onInputSizeChange}required  />

									<label>Upload a the Image</label>
									<input className='inputtextt2 ' type='file' name='image' onChange={onInputImageChange} required  />
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

export default UpdateWomenClothes;
