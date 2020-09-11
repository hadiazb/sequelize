const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}

User.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		role: {
			// 1: User, 2: Nana, 3: Admin
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
	},
	{ sequelize, modelName: 'user' }
);

module.exports = User;
