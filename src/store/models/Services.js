const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Services extends Model {}

Services.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		recommendations: {
			type: DataTypes.STRING,
			allowNull: false
		},
		latitude: {
			type: DataTypes.FLOAT,
			allowNull: true,
		},
		longitude: {
			type: DataTypes.FLOAT,
			allowNull: true,
		}
	},
	{ sequelize, modelName: 'services' }
);

module.exports = Services;
