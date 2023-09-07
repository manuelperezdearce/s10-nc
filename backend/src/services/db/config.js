const { Sequelize } = require('sequelize');
const { config } = require('../../config/env');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

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

const sequelize = new Sequelize(config.dbUrl);
// const sequelize = new Sequelize(URI)

module.exports = sequelize;
