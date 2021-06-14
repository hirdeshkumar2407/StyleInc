/* eslint-disable no-undef */
const expressAsyncHandler = require('express-async-handler');
const Product = require('../models/Product');

exports.getProductList = expressAsyncHandler(async (req, res) => {
	const products = await Product.find({});
	//console.log(products);
	res.status(200).json(products);
});

exports.getProductById = expressAsyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	product ? res.status(200).json(product) : res.status(404).json({ message: 'Product nor Found!!!' });
});
