/* eslint-disable no-undef */
const bcrypt = require('bcryptjs');
const products_data = {
	users: [
		{
			name: 'Malik Rafaquat',
			email: 'rafaqatm291@gmail.com',
			password: bcrypt.hashSync('1234', 8),
			isadmin: true,
		},
		{
			name: 'Malik Liaquat',
			email: 'rafaqat1m291@gmail.com',
			password: bcrypt.hashSync('1234', 8),
			isadmin: false,
		},
	],
	products: [
		{
			name: 'Sheer Paparh1',
			category: 'paparh',
			image: '/images/img1.jpg',
			price: 120,
			inStock: 10,
			brand: 'Saffron',
			description: 'High quality ingredients',
		},
		{
			name: 'Sheer Paparh2',
			category: 'paparh',
			image: '/images/img1.jpg',
			price: 100,
			inStock: 10,
			brand: 'chipa',
			description: 'High quality ingredients',
		},
		{
			name: 'Sheer Paparh3',
			category: 'paparh',
			image: '/images/img1.jpg',
			price: 120,
			inStock: 10,
			brand: 'Saffron',
			description: 'High quality ingredients',
		},
		{
			name: 'Sheer Paparh4',
			category: 'paparh',
			image: '/images/img1.jpg',
			price: 140,
			inStock: 10,
			brand: 'Saffron',
			description: 'High quality ingredients',
		},
		{
			name: 'Sheer Paparh5',
			category: 'paparh',
			image: '/images/img1.jpg',
			price: 187,
			inStock: 10,
			brand: 'Saffron',
			description: 'High quality ingredients',
		},
		{
			name: 'Sheer Paparh6',
			category: 'paparh',
			image: '/images/img5.jpg',
			price: 187,
			inStock: 0,
			brand: 'Saffron',
			description: 'High quality ingredients',
		},
	],
};
module.exports = products_data;
