const user = require('../api/user/network');
const auth = require('../api/auth/network');
const reviews = require('../api/reviews/network');
const services = require('../api/services/network');

const routes = (server) => {
	server.use('/api/users', user);
	server.use('/api/users', auth);
	server.use('/api/reviews', reviews);
	server.use('/api/services', services);
};

module.exports = routes;
