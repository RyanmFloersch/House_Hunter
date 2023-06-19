const { Sequelize } = require('sequelize');
require('dotenv').config();
const PORT = process.env.PORT;
const connection = !PORT ? new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: '127.0.0.1',
    dialect: 'mysql'
  }
) : new Sequelize("mysql://houseHunterAdmin:Mscat123@househunter-database.cmyoklnovea9.us-east-1.rds.amazonaws.com:3306/houseHunter_database");

module.exports = connection;

console.log(connection);


module.exports = connection;
