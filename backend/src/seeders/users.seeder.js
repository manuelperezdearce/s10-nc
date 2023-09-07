const { User } = require('../services/db/models/user.model');
const bcrypt = require('bcrypt');

const createUsers = async () => {
  const pass = bcrypt.hash('ensaladas123', 10);
  try {

    await User.create({
      email: 'vaquitas@mail.com',
      password: pass,
      role_id: 2,
    });
    await User.create({
      email: 'customer@juan.com',
      password: pass,
      role_id: 1,
    });

    console.log('User creados');
  } catch (err) {
    console.log('Error al cargar User', err);
  }
};

module.exports = { createUsers };
