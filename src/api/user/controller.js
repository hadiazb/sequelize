const User = require('../../store/models/User');

module.exports = () => {
	const insert = (body) => {
		User.create({
			name: body.name,
			username: body.username,
		});
	};

	return {
		insert,
	};
};

