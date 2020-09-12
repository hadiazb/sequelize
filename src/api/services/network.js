const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');
const secure = require('./secure');

const list = (req, res, next) => {
	controller
		.list()
		.then((services) => {
			response.success(req, res, services, 200, 'All services Ok');
		})
		.catch(next);
};

const get = (req, res, next) => {
	controller
		.get(req.params.id)
		.then((services) => {
			response.success(req, res, services, 200, 'Service Ok');
		})
		.catch(next);
};

const insert = (req, res, next) => {
	controller
		.insert(req.body)
		.then((services) => {
			response.success(
				req,
				res,
				services,
				200,
				'Service Register Ok'
			);
		})
		.catch(next);
};

const update = (req, res, next) => {
	controller
		.update(req.body, req.params.id)
		.then((services) => {
			response.success(
				req,
				res,
				{ AffectedRows: `${services} rows` },
				200,
				'Service Update Ok'
			);
		})
		.catch(next);
};

const remove = (req, res, next) => {
	controller
		.remove(req.params.id)
		.then((services) => {
			response.success(
				req,
				res,
				{
					serviceDelete: `${services} service delete with id=${req.params.id} `,
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
