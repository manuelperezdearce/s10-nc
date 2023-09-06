const { Restaurant} = require('../services/db/models/restaurant.model');

const createRestaurants = async () => {
  try {
    await Restaurant.sync({ force: true });

    await Restaurant.create({
      name: 'La not Vaquita loca',
      speciality: 'Bebidas veganas',
      city:'Chimbarongo',
      phone_number: 123123123,
      address: "Calle (not)lactea 123",
      description: "Very tasty vegan not milk drinks",
      time_open: "08:00",
      time_close: "21:00",
      user_id: 1,
      role_id: 2
    });


    console.log('Restaurant creados');
  } catch (err) {
    console.log('Error al cargar Restaurant', err);
  }
};

module.exports = { createRestaurants };
