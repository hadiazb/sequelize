const Reviews = require('../../store/models/Reviews');

const list = () => {
	return Reviews.findAll();
};

const get = (id) => {
	return Reviews.findAll({
		where: {
			id: id,
		},
	});
};

const insert = (body) => {
	return Reviews.create({
		opinions: body.opinions,
		starsNumber: body.starsNumber,
		status: body.status,
	});
};

const update = (body, id) => {
	return Reviews.update(
		{
      id: body.id,
      opinions: body.opinions,
      starsNumber: body.starsNumber,
      status: body.status,
		},
		{
			where: {
				id: id,
			},
		}
	);
};

const remove = (id) => {
	return Reviews.destroy({
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
