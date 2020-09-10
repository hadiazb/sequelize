const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const User = require('../../store/models/User');

router.get('/', (req, res, next) => {
	User.findAll()
		.then((users) => {
			response.success(req, res, users, 200);
		})
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	User.findAll({
		where: {
			id: req.params.id,
		},
	})
		.then((users) => {
			response.success(req, res, users, 200);
		})
		.catch(next);
});

router.post('/', (req, res, next) => {
	User.create({
		name: req.body.name,
		username: req.body.username,
	})
		.then((user) => {
			response.success(req, res, user, 200);
		})
		.catch(next);
});

router.put('/:id', (req, res, next) => {
	User.update(
		{
			name: req.body.name,
			username: req.body.username,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	)
		.then((user) => {
			response.success(req, res, user, 200);
		})
		.catch(next);
});

module.exports = router;
