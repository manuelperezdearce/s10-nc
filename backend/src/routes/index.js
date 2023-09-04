const { Router } = require('express');
const restaurantRouter = require('../components/restaurants/routes');
const roleRouter = require('../components/roles/routes');
const customerRouter = require('../components/customers/routes');
const mealRouter = require('../components/meals/routes');
const orderRouter = require('../components/orders/routes');
const categoriesRouter = require('../components/categories/routes');
const orderDetailsRouter = require('../components/orderDetails/routes');
const loginRouter = require('../components/login/routes');

const router = Router();

router.use("/customer",customerRouter);
router.use("/restaurant",restaurantRouter);
router.use("/role",roleRouter);
router.use("/meal",mealRouter);
router.use("/order",orderRouter);
router.use("/categories",categoriesRouter);
router.use("/orderdetails",orderDetailsRouter);
router.use("/login",loginRouter);

module.exports = router;

