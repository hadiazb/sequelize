const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');
const secure = require('./secure');

const list = (req, res, next) => {
	controller
		.list()
		.then((reviews) => {
			response.success(req, res, reviews, 200, 'All reviews Ok');
		})
		.catch(next);
};

const get = (req, res, next) => {
	controller
		.get(req.params.id)
		.then((reviews) => {
			response.success(req, res, reviews, 200, 'User Ok');
		})
		.catch(next);
};

const insert = (req, res, next) => {
	controller
		.insert(req.body)
		.then((reviews) => {
			response.success(
				req,
				res,
				reviews,
				200,
				'Reviews created Ok'
			);
		})
		.catch(next);
};

const update = (req, res, next) => {
	controller
		.update(req.body, req.params.id)
		.then((reviews) => {
			response.success(
				req,
				res,
				{ AffectedRows: `${reviews} rows` },
				200,
				'Reviews Update Ok'
			);
		})
		.catch(next);
};


const remove = (req, res, next) => {
	controller
		.remove(req.params.id)
		.then((reviews) => {
			response.success(
				req,
				res,
				{
					reviewsDelete: `${reviews} user delete with id=${req.params.id} `,
				},
				200
			);
		})
		.catch(next);
};

router.get('/', secure('list'), list);
router.get('/:id', secure('list'), get);
router.post('/', insert);
router.put('/:id', secure('update'), update);
router.delete('/:id', secure('remove'), remove);

module.exports = router;
