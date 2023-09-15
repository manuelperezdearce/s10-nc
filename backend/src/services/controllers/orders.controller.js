const { DetailsOrder } = require('../db/models/details.order');
const { Meals } = require('../db/models/meal.model');
const { Orders } = require('../db/models/order.model');
const { Restaurant } = require('../db/models/restaurant.model');

const getOrders = async (req, res) => {
  try {
    const orders = await Orders.findAll({
      include: [
        {
          model: DetailsOrder,
          attributes: ['quantity'],
          include: [
            {
              model: Meals,
              attributes: ['name', 'id', 'price'],
              include: [{ model: Restaurant, attributes: ['name', 'id'] }],
            },
          ],
        },
      ],
    });
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};
const getOrdersByCustomerId = async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await Orders.findAll({
      where: { customer_id: id },
      include: [
        {
          model: DetailsOrder,
          attributes: ['quantity'],
          include: [
            {
              model: Meals,
              attributes: ['name', 'id', 'price'],
              include: [{ model: Restaurant, attributes: ['name', 'id'] }],
            },
          ],
        },
      ],
    });
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Orders.findByPk(id, {
      include: [
        {
          model: DetailsOrder,
          attributes: ['quantity'],
          include: [
            {
              model: Meals,
              attributes: ['name', 'id', 'price'],
              include: [{ model: Restaurant, attributes: ['name', 'id'] }],
            },
          ],
        },
      ],
    });
    res.status(200).json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

const createOrder = async (req, res) => {
  const { total_price, customer_id, total_quantity, items } = req.body;
  try {
    const newOrder = await Orders.create({
      customer_id,
      total_price,
      total_quantity,
    });

    const itemsArr = items.map((item) => ({ order_id: newOrder.id, ...item }));

    const orderItems = await DetailsOrder.bulkCreate(itemsArr);

    res
      .status(201)
      .json({ message: 'Orden creada', order: newOrder, items: orderItems });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


module.exports = {
  getOrders,
  createOrder,
  getOrder,
  getOrdersByCustomerId,
};
