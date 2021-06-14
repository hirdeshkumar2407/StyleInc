import React from 'react';
import { Link } from 'react-router-dom';

const ProductFemale = (props) => {
	const { product } = props;
	return (
		<div className='card' key={product._id}>
			<Link to={`productf/${product._id}`}>
				<img className='medium' src={product.image} alt={product.name} />
			</Link>
			<div className='card-body'>
				<Link to={`productf/${product._id}`}>{product.name}</Link>
			</div>
			<div className='price'>{product.price}</div>
		</div>
	);
};

export default ProductFemale;
