const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const response = require('../../network/response');
const User = require('../../store/models/User');
const Auth = require('../../store/models/Auth');

router.get('/', (req, res, next) => {
	User.findAll()
		.then((users) => {
			response.success(req, res, users, 200, 'All users Ok');
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
			response.success(req, res, users, 200, 'User Ok');
		})
		.catch(next);
});

router.post('/', (req, res, next) => {
	User.create({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		age: req.body.age,
		rol: req.body.rol,
	})
		.then((user) => {
			response.success(req, res, user, 200, 'User Created Ok');
		})
		.catch(next);

	Auth.create({
		username: req.body.username,
		password: bcrypt.hashSync(req.body.password, 10),
		email: req.body.email,
	})
		.then((auth) => {
			response.success(req, res, auth, 200, 'User Created Ok');
		})
		.catch(next);
});

router.put('/:id', (req, res, next) => {
	User.update(
		{
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      age: req.body.age,
      rol: req.body.rol,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	)
		.then((user) => {
			response.success(
				req,
				res,
				{ AffectedRows: `${user} rows` },
				200,
				'User Update Ok'
			);
		})
		.catch(next);
});

router.delete('/:id', (req, res, next) => {
	User.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((result) => {
			response.success(
				req,
				res,
				{
					userDelete: `${result} user delete with id=${req.params.id} `,
				},
				200
			);
		})
		.catch(next);
});

module.exports = router;
