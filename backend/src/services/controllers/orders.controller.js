const { Orders } = require('../db/models/order.model');

const getOrders = async (req, res) => {
  try {
    const oders = await Orders.findAll();
    res.status(200).json(oders);
  } catch (err) {
    console.log(err);
  }
};

const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Orders.findByPk(id);
    res.status(200).json(order);
  } catch (err) {
    console.log(err);
  }
};

const createOrder = async (req, res) => {
  const body = req.body;
  try {
    const newOrder = await Orders.create(body);
    res.status(201).json(newOrder);
  } catch (err) {
    console.log(err);
  }
};

// orders/customer/:id
const getOrdersByCustomer = async (req, res) => {
  const customerId = req.params;
  try {
    const orders = await Orders.findAll({ where: { customer_id: customerId } });
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getOrders,
  createOrder,
  getOrder,
  getOrdersByCustomer,
};
