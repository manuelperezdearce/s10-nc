const { User } = require('../services/db/models/user.model');

const createUsers = async () => {
  try {
    // await User.sync({ force: true });

    await User.create({
      email: 'vaquitas@mail.com',
      password: 'ensaladas123',
      role_id: 2,
    });

    console.log('User creados');
  } catch (err) {
    console.log('Error al cargar User', err);
  }
};

module.exports = { createUsers };
