const { Roles } = require('../services/db/models/role.model');

const createRoles = async () => {
  try {
    await Roles.sync({ force: true });

    await Roles.create({
      name: 'customer',
    });
    await Roles.create({
      name: 'restaurant',
    });

    console.log('Roles creados');
  } catch (err) {
    console.log('Error al cargar Roles', err);
  }
};

module.exports = { createRoles };
