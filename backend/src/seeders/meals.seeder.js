const { Meals } = require('../services/db/models/meal.model');

const createMeals = async () => {
  try {
    await Meals.create({
      name: 'hamburguesa 1',
      id: 'a11',
      description: 'Hamburguesa lorem ipsum',
      role_id: 2,
      price: 2000,
      category_id: 7,
      restaurant_id: 1,
      image:
        'https://images.pexels.com/photos/4871115/pexels-photo-4871115.jpeg',
      is_vegan: true,
      is_glutenfree: false,
      is_proteinplus: false,
    });
    await Meals.create({
      name: 'hamburguesa 2',
      id: 'a12',
      description: 'Hamburguesa lorem ipsum',
      role_id: 2,
      price: 2000,
      category_id: 7,
      restaurant_id: 1,
      image:
        'https://images.pexels.com/photos/4871115/pexels-photo-4871115.jpeg',
      is_vegan: true,
      is_glutenfree: false,
      is_proteinplus: false,
    });
    await Meals.create({
      name: 'hamburguesa 3',
      id: 'a13',
      description: 'Hamburguesa lorem ipsum',
      role_id: 2,
      price: 2000,
      category_id: 7,
      restaurant_id: 1,
      image:
        'https://images.pexels.com/photos/4871115/pexels-photo-4871115.jpeg',
      is_vegan: true,
      is_glutenfree: false,
      is_proteinplus: false,
    });

    console.log('Meals creados');
  } catch (err) {
    console.log('Error al cargar Meals', err);
  }
};

module.exports = { createMeals };
