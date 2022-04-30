const Sequelize = require('sequelize');
require("dotenv").config();

console.log (process.env.DB_PASSWORD)

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  // Get this to work with .env
  : new Sequelize(process.env.DB_NAME, "root", "q1w2e#R$T%", {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });


module.exports = sequelize;