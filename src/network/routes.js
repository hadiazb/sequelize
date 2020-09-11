const user = require('../api/user/network');
const auth = require('../api/auth/network');
const reviews = require('../api/reviews/network');

const routes = (server) => {
	server.use('/api/users', user);
	server.use('/api/users', auth);
	server.use('/api/reviews', reviews);
};

module.exports = routes;
