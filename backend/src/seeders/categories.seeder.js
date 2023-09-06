const { Category } = require('../services/db/models/category.model');

const createCategories = async () => {
  try {
    // await Category.sync({ force: true });

    await Category.create({
      name: 'Ensaladas',
    });
    await Category.create({
      name: 'Bebidas',
    });
    await Category.create({
      name: 'Sopas',
    });
    await Category.create({
      name: 'Pastas',
    });
    await Category.create({
      name: 'Carnes',
    });
    await Category.create({
      name: 'Pizzas',
    });
    await Category.create({
      name: 'Hamburguesas',
    });
    await Category.create({
      name: 'Snacks',
    });
    await Category.create({
      name: 'Batidos',
    });

    console.log('Categorias creadas');
  } catch (err) {
    console.log('Error al cargar Categorias', err);
  }
};

module.exports = { createCategories };
