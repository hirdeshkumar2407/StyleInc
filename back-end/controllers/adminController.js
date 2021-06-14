/* eslint-disable no-undef */
const Admin = require('../models/Admin');
const expressAsyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const adminmiddleWare = require('../api/adminmiddleWare');

exports.adminSignIn = expressAsyncHandler(async (req, res) => {
	const admin = await Admin.findOne({ email: req.body.email });
	if (admin) {
		if (bcrypt.compareSync(req.body.password, admin.password)) {
			res.send({
				_id: admin._id,
				name: admin.name,
				email: admin.email,
				token: adminmiddleWare.generateToken(admin),
			});
			return;
		} else {
			res.status(401).json({ message: 'user password is Invalid !!! ' });
		}
	} else {
		res.status(401).json({ message: ' Username is Invalid !!! ' });
	}
});

exports.registerAdmin = expressAsyncHandler(async (req, res) => {
	const admin = new Admin({
		name: req.body.name,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
	});
	const adminCreate = await admin.save();
	res.status(200).json({
		_id: adminCreate._id,
		name: adminCreate.name,
		email: adminCreate.email,
		token: adminmiddleWare.generateToken(adminCreate),
	});
});
