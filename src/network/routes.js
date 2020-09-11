const user = require('../api/user/network');
const auth = require('../api/auth/network');

const routes = (server) => {
	server.use('/api/users', user);
	server.use('/api/users', auth);
};

module.exports = routes;
