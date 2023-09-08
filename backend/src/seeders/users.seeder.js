const { User } = require('../services/db/models/user.model');
const bcrypt = require('bcrypt');

const createUsers = async () => {
  try {
    const pass = await bcrypt.hash('ensaladas123', 10);

    await User.bulkCreate([
      {
        email: 'vaquitas@mail.com',
        password: pass,
        role_id: 2,
      },
      {
        email: 'vaquitas2@mail.com',
        password: pass,
        role_id: 2,
      },
      {
        email: 'vaquitas3@mail.com',
        password: pass,
        role_id: 2,
      },
      {
        email: 'vaquitas4@mail.com',
        password: pass,
        role_id: 2,
      },
      {
        email: 'vaquitas5@mail.com',
        password: pass,
        role_id: 2,
      },
      {
        email: 'vaquitas6@mail.com',
        password: pass,
        role_id: 2,
      },
      {
        email: 'vaquitas7@mail.com',
        password: pass,
        role_id: 2,
      },
      {
        email: 'vaquitas8@mail.com',
        password: pass,
        role_id: 2,
      },
      {
        email: 'vaquitas9@mail.com',
        password: pass,
        role_id: 2,
      },
      {
        email: 'vaquitas10@mail.com',
        password: pass,
        role_id: 2,
      },
    ])
;

    console.log('User creados');
  } catch (err) {
    console.log('Error al cargar User', err);
  }
};

module.exports = { createUsers };
