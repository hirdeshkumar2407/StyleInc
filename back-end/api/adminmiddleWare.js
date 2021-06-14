/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
exports.generateToken = (admin) => {
	return jwt.sign(
		{
			_id: admin._id,
			name: admin.name,
			email: admin.email,
		},
		'batana nahi',
		{
			expiresIn: '30d',
		}
	);
};

exports.isAuth = (req, res, next) => {
	const authorization = req.headers.authorization;
	if (authorization) {
		const token = authorization.slice(7, authorization.length);
		jwt.verify(token, 'batana nahi', (err, decode) => {
			if (err) {
				res.status(401).json({ message: 'Invalid token' });
			} else {
				req.admin = decode;
				next();
			}
		});
	} else {
		res.status(401).json({ message: 'Token Not found' });
	}
};
