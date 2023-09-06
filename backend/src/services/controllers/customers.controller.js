const { Customers } = require('../db/models/customer.model');
const { createToken } = require('../auth');
const {createCustomerAsUser} = require('../tableRelationshipManager/customerInUsers');

// Asynchronous function to get all customers 
const getCustomers = async (req, res) => {
  try {
    const customers = await Customers.findAll();
    res.status(200).json(customers);
  } catch (err) {
    console.log(err);
  }
};

// Asynchronous function to get customers by id
const getCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customers.findOne({
      where: {
        id,
      },
    });

//Return a customer if it exists, otherwise return an error message
    customer
      ? res.status(200).json(customer)
      : res.status(400).send('Customer not found');
  } catch (err) {
    console.log(err);
  }
};

// Asynchronous functio to create customers
const createCustomer = async (req, res) => {
  const { name, address, phone_number,role_id,user_id } = req.body;

  if( role_id !== "1") return res.status(401).send('Authorized only for customers')

  const newCustomers = await Customers.create({
    
    user_id,
    name,
    address,
    phone_number,
  });

//this variable contains the validate token
  const token = createToken(newCustomers.id);

  res.status(200).json({ token });
};

// Asynchronous function to update customers
const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const customer = await Customers.findOne({
      where: {
        id: id,
      },
    });

    if (!customer) {
      return res.status(404).send('Customer not found');
    }

    customer.update(body);

  
    res.status(200).json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// Asynchronous function to delete customers
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
