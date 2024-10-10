const { Sequelize, DataTypes } = require('@sequelize/core');
const { MySqlDialect } = require('@sequelize/mysql');

const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: 'tap_to_earn',
  user: 'root',
  password: '123456',
  host: 'localhost',
  port: 3306,
});

module.exports = {
  sequelize,  Sequelize, DataTypes
};