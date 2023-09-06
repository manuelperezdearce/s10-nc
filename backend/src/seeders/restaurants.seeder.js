const { Restaurant } = require('../services/db/models/restaurant.model');

const createRestaurants = async () => {
  try {
    await Restaurant.sync({ force: true });

    await Restaurant.create({
      user_id: 1,
      name: 'La not Vaquita loca',
      description: 'Very tasty vegan not milk drinks',
      speciality: 'Bebidas veganas',
      phone_number: 123123123,
      address: 'Calle (not)lactea 123',
      city: 'Chimbarongo',
      time_open: '08:00',
      time_close: '21:00'
    });

    console.log('Restaurant creados');
  } catch (err) {
    console.log('Error al cargar Restaurant', err);
  }
};

module.exports = { createRestaurants };
