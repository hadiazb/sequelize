const express = require('express');
const app = express();
const debug = require('debug')('app:server');
const bodyParser = require('body-parser');

const config = require('./config/index');
const sequelize = require('./store/db');
const errors = require('./network/errors');

app.use(bodyParser.json());
const router = require('./network/routes');
router(app);

app.use(errors);

app.listen(config.app.port, () => {
	debug(`Listening on http://localhost:${config.app.port}`);

	sequelize
		.sync({ force: false })
		.then(() => {
			debug('Base de datos conectada!!!');
		})
		.catch((error) => {
			debug('Se produjo un a error', error);
		});
});
