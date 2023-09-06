const { createCategories } = require('./categories.seeder');
const { createRoles } = require('./roles.seeder');

const loadSeeds = async () => {
  try {
    await createRoles();
    await createCategories();
    console.log('Seeds cargados');
  } catch (err) {
    console.log('Error en la carga de seeds', err);
  }
};

module.exports = { loadSeeds };
