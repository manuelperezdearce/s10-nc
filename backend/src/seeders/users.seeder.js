const { User } = require('../services/db/models/user.model');
const bcrypt = require('bcrypt');

const createUsers = async () => {
  const createPassword = (pass) => bcrypt.hash(pass, 10);
  try {
    // await User.sync({ force: true });

    await User.create({
      email: 'vaquitas@mail.com',
      password: createPassword('ensaladas123'),
      role_id: 2,
    });
    await User.create({
      email: 'customer@juan.com',
      password: createPassword('ensaladas123'),
      role_id: 1,
    });

    console.log('User creados');
  } catch (err) {
    console.log('Error al cargar User', err);
  }
};

module.exports = { createUsers };
