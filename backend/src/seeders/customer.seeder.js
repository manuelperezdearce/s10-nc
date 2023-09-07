const { Customers } = require('../services/db/models/customer.model');

const createCustomers = async () => {
  try {
    await Customers.create({
      name: 'Customer 1',
      address: 'customer adress',
      phone_number: 131231232,
      user_id: 2,
      role_id: 1,
    });

    console.log('Customers creados');
  } catch (err) {
    console.log('Error al cargar Restaurant', err);
  }
};

module.exports = { createCustomers };
