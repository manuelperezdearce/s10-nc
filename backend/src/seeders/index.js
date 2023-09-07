const { createCategories } = require('./categories.seeder');
const { createCustomers } = require('./customer.seeder');
const { createMeals } = require('./meals.seeder');
const { createRestaurants } = require('./restaurants.seeder');
const { createRoles } = require('./roles.seeder');
const { createUsers } = require('./users.seeder');

const loadSeeds = async () => {
  try {
    await createRoles();
    await createCategories();
    await createUsers();
    await createRestaurants();
    await createMeals();
    await createCustomers();
    console.log('Seeds cargados');
  } catch (err) {
    console.log('Error en la carga de seeds', err);
  }
};

module.exports = { loadSeeds };
