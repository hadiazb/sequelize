const jwt = require('jsonwebtoken');
const error = require('../util/error');
const config = require('../config/index');

function sign(data) {
	return jwt.sign(data, config.auth.secret, {
		expiresIn: 60 * 30,
	});
}

function verify(token) {
	return jwt.verify(token, config.auth.secret);
}

const check = {
	own: function (req, owner) {
		const decoded = decodeHeader(req);

		if (decoded.id !== owner) {
			throw error('No puedes hacer esto', 401);
		}
	},
};

function getToken(auth) {
	if (!auth) {
		throw error('No viene token', 401);
	}

	if (auth.indexOf('Bearer ') === -1) {
		throw error('Formato invalido', 401);
	}

	let token = auth.replace('Bearer ', '');
	return token;
}

function decodeHeader(req) {
	const authorization = req.headers.authorization || '';
	const token = getToken(authorization);
	const decoded = verify(token);

	req.user = decoded;

	return decoded;
}

module.exports = {
	sign,
	check,
};