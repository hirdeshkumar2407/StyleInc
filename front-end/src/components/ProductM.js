import React from 'react';
import { Link } from 'react-router-dom';

const ProductM = (props) => {
	const { product } = props;
	return (
		<div className='card' key={product._id}>
			<Link to={`productm/${product._id}`}>
				<img className='medium' src={product.image} alt={product.name} />
			</Link>
			<div className='card-body'>
				<Link to={`productm/${product._id}`}>{product.name}</Link>
			</div>
			<div className='price'>{product.price}</div>
		</div>
	);
};

export default ProductM;
