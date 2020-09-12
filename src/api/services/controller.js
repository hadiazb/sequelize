const Services = require('../../store/models/Services');

const list = () => {
	return Services.findAll();
};

const get = (id) => {
	return Services.findAll({
		where: {
			id: id,
		},
	});
};

const insert = (body) => {
	console.log(body);
	return Services.create({
		recommendations: body.recommendations,
		latitude: body.latitude,
		longitude: body.longitude,
		serviceStart: body.serviceStart,
		serviceEnd: body.serviceEnd,
	});
};

const update = (body, id) => {
	return Services.update(
		{
			id: body.id,
			name: body.name,
			recommendations: body.recommendations,
			latitude: body.latitude,
			longitude: body.longitude,
			serviceStart: body.serviceStart,
			serviceEnd: body.serviceEnd,
		},
		{
			where: {
				id: id,
			},
		}
	);
};

const remove = (id) => {
	return Services.destroy({
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
