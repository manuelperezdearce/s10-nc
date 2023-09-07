const { Router } = require('express');
const { validateAddRestaurant } = require('../middleware/validate.add.restaurant');
const { createRestaurant, getRestaurants, getRestaurant } = require('../../../services/controllers/restaurants.controller');

const restaurantRouter = Router();

// Path to get all restaurant
restaurantRouter.get('/', getRestaurants)
// Path to get restaurant by id
restaurantRouter.get('/:id', getRestaurant)
// Path to create restaurants
// validateAddRestaurant is a middleware to validate the request payload
restaurantRouter.post('/add', validateAddRestaurant,createRestaurant)

module.exports = restaurantRouter;