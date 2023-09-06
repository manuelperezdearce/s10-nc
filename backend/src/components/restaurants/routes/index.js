const { Router } = require('express');
const { validateAddRestaurant } = require('../middleware/validate.add.restaurant');
const { createRestaurant, getRestaurants, getRestaurant, updateRestaurant } = require('../../../services/controllers/restaurants.controller');
const { validateTokenMiddleware } = require('../../../middlewares/authValidation/validate.token');
const { verifyTokenMiddleware } = require('../../../middlewares/authValidation/verify.token');

const restaurantRouter = Router();

// Path to get all restaurant
restaurantRouter.get('/', getRestaurants)
// Path to get restaurant by id
restaurantRouter.get('/:id', getRestaurant)
restaurantRouter.put('/:id',validateTokenMiddleware,verifyTokenMiddleware, updateRestaurant)
// Path to create restaurants
// validateAddRestaurant is a middleware to validate the request payload
restaurantRouter.post('/add', validateAddRestaurant,createRestaurant)

module.exports = restaurantRouter;
