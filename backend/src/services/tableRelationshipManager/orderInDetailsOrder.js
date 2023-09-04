const { DetailsOrder } = require('../db/models/details.order');

const createOrderInOrderDetails = async (id,req) => {
    const { meal_id,quantity } = req.body;
  
    const newOrderDetail = await DetailsOrder.create({
      order_id:id,
      meal_id,
      quantity
    });
  console.log(newOrderDetail)
};

module.exports = { createOrderInOrderDetails }