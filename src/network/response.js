exports.success = (req, res, message, status, details) => {
	let statusCode = status || 200;
	let statusMessage = message || '';

	res.status(status).send({
		error: false,
		status: statusCode,
		details: details,
		body: statusMessage,
	});
};

exports.error = (req, res, message, status, details) => {
	let statusCode = status || 500;
	let statusMessage = message || 'Internal Server Error';

	res.status(statusCode).send({
		error: false,
		status: statusCode,
		details: details,
		details: details,
		body: statusMessage,
	});
};