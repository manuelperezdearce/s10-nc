const { createRestaurant } = require('../services/controllers/restaurants.controller');
const { createCategories } = require('./categories.seeder');
const { createRoles } = require('./roles.seeder');
const { createUsers } = require('./users.seeder');

const loadSeeds = async () => {
  try {
    await createRoles();
    await createCategories();
    await createUsers();
    await createRestaurant()
    console.log('Seeds cargados');
  } catch (err) {
    console.log('Error en la carga de seeds', err);
  }
};

module.exports = { loadSeeds };
