const response = require('./response');

const errors = (err, req, res, next) => {
	console.error('[error]', err);
	log_file.write(new Date().toString() + ':' + err.stack);
	const message = err.message || 'Error interno';
	const status = err.statusCode || 500;

	response.error(req, res, message, status);
};

module.exports = errors;
