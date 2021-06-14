/* eslint-disable no-undef */
const User = require('../models/User');
const expressAsyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const middleWare = require('../api/middleWare');

exports.userSignIn = expressAsyncHandler(async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (user) {
		if (bcrypt.compareSync(req.body.password, user.password)) {
			res.send({
				_id: user._id,
				name: user.name,
				email: user.email,
				token: middleWare.generateToken(user),
			});
			return;
		} else {
			res.status(401).json({ message: 'user password is Invalid !!! ' });
		}
	}
	res.status(401).json({ message: ' Username is Invalid !!! ' });
});

exports.registerUser = expressAsyncHandler(async (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
	});
	const userCreate = await user.save();
	res.status(200).json({
		_id: userCreate._id,
		name: userCreate.name,
		email: userCreate.email,
		token: middleWare.generateToken(userCreate),
	});
});

exports.getUserById = expressAsyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);
	if (user) {
		res.status(200).json(user);
	} else {
		res.status(404).json({ message: 'User Not found' });
	}
});

exports.updateUserProfile = expressAsyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		if (req.body.password) {
			user.password = bcrypt.hashSync(req.body.password, 8);
		}
		const updatedUser = await user.save();
		res.status(200).json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			token: middleWare.generateToken(updatedUser),
		});
	}
});

exports.getAllUsers = expressAsyncHandler(async (req, res) => {
	const users = await User.find({});
	res.status(200).json(users);
});

exports.deleteUser = expressAsyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);
	if (user) {
		if (user.email === 'rafaqatm291@gmail.com') {
			res.status(400).json({ message: ' Admin user Cannot be Deleted !!!!' });
			return;
		}
		const userDelete = await user.remove();
		res.status(200).json({ message: 'User Deleted Successfully', user: userDelete });
	} else {
		res.status(404).json({ message: 'User not found !!!' });
	}
});

exports.updateUser = expressAsyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);
	if (user) {
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		const updatedUser = await user.save();
		res.status(200).json({ message: 'User Updated Successfully', user: updatedUser });
	} else {
		res.status(404).json({ message: 'User not found !!!!' });
	}
});
