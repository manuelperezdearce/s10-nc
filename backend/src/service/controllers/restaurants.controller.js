const { Op } = require('sequelize');
const Restaurant = require('../../db/models/restaurant.model');

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json(restaurants);
  } catch (err) {
    console.log(err);
  }
};

const getRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = Restaurant.findByPk(id);
    restaurant
      ? res.status(200).json(restaurant)
      : res.status(400).send('Restaurant not found');
  } catch (err) {
    console.log(err);
  }
};

// /resturant/:city ???
const getRestaurantByCity = async (req, res) => {
  const { city } = req.params;
  try {
    const restaurants = await Restaurant.findAll({
      where: {
        city: {
          [Op.like]: `%${city}%`,
        },
      },
    });
    restaurants
      ? res.status(200).json(restaurants)
      : res.status(400).send('No se han encontrado restaurants');
  } catch (err) {
    console.log(err);
  }
};

const createRestaurant = async (req, res) => {
  const body = req.body;
  try {
    const newRestaurant = await Restaurant.create(body);
    res.status(201).json(newRestaurant);
  } catch (err) {
    console.log(err);
  }
};

const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedRestaurant = await Restaurant.update(
      {
        body,
      },
      {
        where: {
          id: id,
        },
      },
    );
    updatedRestaurant
      ? res.status(201).json(updateRestaurant)
      : res.status(400).send('Restaurant not found');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRestaurants,
  getRestaurant,
  getRestaurantByCity,
  updateRestaurant,
  createRestaurant,
};
