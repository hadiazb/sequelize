const User = require('../../store/models/User');

const list = () => {
	return User.findAll();
};

const get = (id) => {
	return User.findAll({
		where: {
			id: id,
		},
	});
};

const insert = (body) => {
	return User.create({
		name: body.name,
		username: body.username,
		email: body.email,
		age: body.age,
		rol: body.rol,
	});
};

const update = (body, id) => {
	return User.update(
		{
			id: body.id,
			name: body.name,
			username: body.username,
			email: body.email,
			age: body.age,
			rol: body.rol,
		},
		{
			where: {
				id: id,
			},
		}
	);
};

const remove = (id) => {
	return User.destroy({
		where: {
			id: id,
		},
	});
};

module.exports = {
	insert,
	list,
	get,
	remove,
	update,
};
