const { Router } = require('express');
const { validateCreateOrder } = require('../middleware/validate.create.order');
const { getOrders, createOrder, getOrder, getOrdersByCustomerId } = require('../../../services/controllers/orders.controller');
const { validateTokenMiddleware } = require('../../../middlewares/authValidation/validate.token');
const { verifyTokenMiddleware } = require('../../../middlewares/authValidation/verify.token');
const orderRouter = Router();

// Path to get all orders
orderRouter.get('/',getOrders);
orderRouter.get('/:id',getOrder);
orderRouter.get('/customer/:id',getOrdersByCustomerId);

// Path to create orders, the user must have a validation token
orderRouter.post('/add',validateCreateOrder,validateTokenMiddleware,verifyTokenMiddleware,createOrder);

module.exports = orderRouter;
