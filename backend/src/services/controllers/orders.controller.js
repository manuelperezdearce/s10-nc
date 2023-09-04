const { Orders } = require('../db/models/order.model');
const { createOrderInOrderDetails } = require('../tableRelationshipManager/orderInDetailsOrder');

const getOrders = async (req, res) => {
  try {
    const orders = await Orders.findAll();
    res.status(200).json(orders);
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
  const { total_price,customer_id } = req.body;
  try {
    const newOrder = await Orders.create({ customer_id, total_price });
    
    createOrderInOrderDetails(newOrder.id,req)

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(404).json({message:err.message})
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
