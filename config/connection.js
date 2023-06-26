const { Sequelize } = require('sequelize');
require('dotenv').config();
const PORT = process.env.PORT;
// If ther is no port instantiate the sequelize with env and localhost else if there is a port initialize to the database
const connection = !PORT ? new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',    
    dialect: 'mysql'
  }
) : new Sequelize(process.env.DB_CONNECT);
// new Sequelize("mysql://"+ process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@"+process.env.DB_ENDPOINT+":3306/"+process.env.DB_NAME)

console.log(connection);


module.exports = connection;
