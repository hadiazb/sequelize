const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Auth extends Model {}

Auth.init(
	{
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
    password: {
			type: DataTypes.STRING,
			allowNull: false
		},
    email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		}
	},
	{ sequelize, modelName: 'auth' }
);


module.exports = Auth;