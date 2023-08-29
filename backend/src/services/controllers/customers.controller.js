const { Customers } = require('../db/models/customer.model');

const getCustomers = async (req, res) => {
  try {
    const customers = await Customers.findAll();
    res.status(200).json(customers);
  } catch (err) {
    console.log(err);
  }
};

const getCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = Customers.findByPk(id);
    customer
      ? res.status(200).json(customer)
      : res.status(400).send('Customer not found');
  } catch (err) {
    console.log(err);
  }
};

const createCustomer = async (req, res) => {
  const body = req.body;
  try {
    const newCustomer = await Customers.create(body);
    res.status(201).json(newCustomer);
  } catch (err) {
    console.log(err);
  }
};

const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedCustomer = await Customers.update(
      {
        body,
      },
      {
        where: {
          id: id,
        },
      },
    );
    updatedCustomer
      ? res.status(201).json(updateCustomer)
      : res.status(400).send('Customer not found');
  } catch (err) {
    console.log(err);
  }
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const meal = await Customers.findOne({ where: { id: id } });
    if (meal) {
      await Customers.destroy({ where: { id: id } });
      return res.status(202).send('Customer eliminado');
    } else {
      return res.status(400).send('Customer no encontrado');
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCustomers,
  getCustomer,
  updateCustomer,
  createCustomer,
  deleteCustomer,
};
