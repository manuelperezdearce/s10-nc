const { Router } = require('express');
const { getOrderDetails, getOrderDetailsById } = require('../../../services/controllers/orderDetails.controller');
const { validateGetOrderDetailMiddleware } = require('../middleware/validateGetOrderDetails.middleware');
const { requireIdMiddleware } = require('../../../middlewares/payloadValidation/requireId.middleware');

const orderDetailsRouter = Router();

// Path to get all order details 
orderDetailsRouter.get('/',validateGetOrderDetailMiddleware,getOrderDetails);
// Path to get order details by id
orderDetailsRouter.get('/:id',requireIdMiddleware,getOrderDetailsById);

module.exports = orderDetailsRouter;