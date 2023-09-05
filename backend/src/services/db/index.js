const sequelize = require('./config');
require('./models');

const dbInitializer = async () => {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  await sequelize
    // .sync({ alter: true })
    .sync({ force: true })
    .then(() => {
      console.log('sincronisacion completada');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { dbInitializer };
