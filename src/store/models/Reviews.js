const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

class Reviews extends Model {}

Reviews.init(
	{
		opinions: {
			type: DataTypes.STRING(1234),
			allowNull: true,
		},
		starsNumber: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0,
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0,
		},
		userId: {
			type: DataTypes.INTEGER,
			references: {
				model: User,
				key: 'id',
			},
		},
	},
	{ sequelize, modelName: 'reviews' }
);

module.exports = Reviews;
