/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
exports.generateToken = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			name: user.name,
			email: user.email,
			isadmin: user.isadmin,
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
				req.user = decode;
				next();
			}
		});
	} else {
		res.status(401).json({ message: 'Token Not found' });
	}
};

exports.isAdmin = (req, res, next) => {
	if (req.user && req.user.isadmin) {
		next();
	} else {
		res.status(401).json({ message: 'Invalid Admin Token' });
	}
};
