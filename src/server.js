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
		.sync({ force: true })
		.then(() => {
			console.log('Base de datos conectada!!!');
		})
		.catch((error) => {
			console.log('Se produjo un a error', error);
		});
});
