const expressAsyncHandler = require('express-async-handler');
const Order = require('../models/Order');

exports.createOrder = expressAsyncHandler(async (req, res) => {
	if (req.body.orderItems.length === 0) {
		res.status(400).json({ message: 'Cart is empty' });
	} else {
		const order = new Order({
			orderItems: req.body.orderItems,
			shippingAddress: req.body.shippingAddress,
			paymentDetails: req.body.paymentDetails,
			itemsPrice: req.body.itemsPrice,
			shippingPrice: req.body.shippingPrice,
			tax: req.body.tax,
			totalPrice: req.body.totalPrice,
			user: req.user._id,
		});
		const orderCreate = await order.save();
		res.status(201).json({ message: 'New Order Created', order: orderCreate });
	}
});

exports.customerOrderList = expressAsyncHandler(async (req, res) => {
	const orders = await Order.find({ user: req.user._id });
	res.status(200).json(orders);
});

exports.getOrderbyId = expressAsyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);
	if (order) {
		res.status(200).json(order);
	} else {
		res.status(404).json({ message: 'Order not found' });
	}
});
exports.listOrder = expressAsyncHandler(async (req, res) => {
	const orders = await Order.find({}).populate('user', 'name');
	res.send(orders);
});

exports.deleteOrder = expressAsyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);
	if (order) {
		const orderDelete = await order.remove();
		res.status(200).json({ message: 'Order Deleted succcessfully', order: orderDelete });
	} else {
		res.status(404).json({ message: 'Order Not found !!!' });
	}
});
