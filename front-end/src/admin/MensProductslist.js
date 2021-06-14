/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import './admin_dasboard.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Axios from 'axios';
function MensProductslist(props) {
	var i = 1;
	const [menProuductsList, setMenProductList] = useState([]);

	const getMenProducts = () => {
		Axios.get('/api/menclothes/').then((res) => {
			setMenProductList(res.data);
			console.log(res.data);
		});
	};
	useEffect(() => {
		getMenProducts();
	}, []);

	const handleDelete = async (id) => {
		await Axios.delete(`/api/menclothes/${id}/deleteMenClothes`);
		getMenProducts();
	};

	return (
		<>
			<Navbar />
			<div id='layoutSidenav'>
				<Sidebar />
				<div> </div>
				<div id='layoutSidenav_content' style={{ paddingLeft: '10px', paddingRight: '10px' }}>
					<div>
						<main>
							<h1 style={{ textAlign: 'center' }}>Mens Products</h1>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>#</th>
										<th>Name</th>
										<th>Image</th>
										<th>Category</th>
										<th>Price</th>
										<th>Stock</th>
										<th>Brand</th>
										<th>Size</th>
                                        <th></th>
                                        <th></th>
									</tr>
								</thead>
								<tbody >
									{menProuductsList.map((product) => (
										<tr key={product._id}>
											<td>{i++}</td>
											<td>{product.name}</td>
											<td>
												<img
													className='medium'
													src={product.image}
													alt={product.name}
													style={{ maxWidth: '3rem', width: '100%' }}
												/>
											</td>
											<td>{product.category}</td>
											<td>{product.price}</td>
											<td>{product.inStock}</td>
											<td>{product.brand}</td>
											<td>{product.size}</td>
											<td className='col text-center '>
												<Button
													
													variant='outline-dark'
													onClick={() => {
														props.history.push(`/dashboard/men/list/${product._id}/update`);
													}}
												>
													Update
												</Button>
												
											</td>
											<td className='col text-center'>
												<Button
													variant='outline-dark'
													onClick={() => {
														handleDelete(product._id);
													}}
												>
													Delete
												</Button>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						</main>
						<footer className='py-4 bg-light mt-auto' />
					</div>
				</div>
			</div>
		</>
	);
}

export default MensProductslist;
