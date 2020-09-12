const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Services extends Model {}

Services.init(
	{
		recommendations: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		latitude: {
			type: DataTypes.FLOAT,
			allowNull: true,
		},
		longitude: {
			type: DataTypes.FLOAT,
			allowNull: true,
		},
		servicesStart: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
		servicesEnd: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW

		},
	},
	{ sequelize, modelName: 'services' }
);

module.exports = Services;
