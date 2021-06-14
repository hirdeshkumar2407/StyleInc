/* eslint-disable no-undef */
const express = require('express');
const Controller = require('../controllers/productController');
const router = express.Router();

router.get('/', Controller.getProductList);
router.get('/:id', Controller.getProductById);

// router.get(
// 	'/seed',
// 	expressAsyncHandler(async (req, res) => {
// 		const productsCreate = await Product.insertMany(data.products);
// 		res.status(200).json({ productsCreate });
// 	})
// );

module.exports = router;
