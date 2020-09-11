const auth = require('../../auth/index');

module.exports = function checkAuth(action) {
	function middleware(req, res, next) {
    const owner = req.body.id;
    const id = req.params.id;
		switch (action) {
			case 'update':
				auth.check.own(req, id);
				next();
				break;

			case 'list':
				auth.check.own(req, owner);
				next();
				break;

			case 'remove':
				auth.check.own(req, id);
				next();
				break;

			default:
				next();
		}
	}

	return middleware;
};
