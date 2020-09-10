const user = require('../api/user/network');

const routes = (server) => {
	server.use('/api/users', user);
};

module.exports = routes;
