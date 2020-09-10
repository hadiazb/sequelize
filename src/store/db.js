const { Sequelize } = require('sequelize');
const config = require('../config/index');

const sequelize = new Sequelize(
	config.database.dbName,
	config.database.dbUser,
	config.database.dbPassword,
	{
		host: config.database.dbHost,
		dialect: 'mysql',
	}
);

module.exports = sequelize;
