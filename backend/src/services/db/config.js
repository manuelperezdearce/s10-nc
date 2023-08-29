const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "test_sequelize",
  "postgres",
  "Guille04",
  {
    host: "localhost",
    dialect: 'postgres',
    logging: false,
  },
);

module.exports = sequelize;
