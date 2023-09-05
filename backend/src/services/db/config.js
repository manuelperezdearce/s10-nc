const { Sequelize } = require('sequelize');
const { config } = require('../../config/env');

// const sequelize = new Sequelize(
//   "test_sequelize",
//   "postgres",
//   "Guille04",
//   {
//     host: "localhost",
//     dialect: 'postgres',
//     logging: false,
//   },
// );

const sequelize = new Sequelize(config.dbUrl)

module.exports = sequelize;
