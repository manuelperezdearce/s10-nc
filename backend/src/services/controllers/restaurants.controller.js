const { Op } = require('sequelize');
const { Restaurant } = require('../db/models/restaurant.model');
const { createToken } = require('../auth');

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json(restaurants);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

const getRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findByPk(id);
    restaurant
      ? res.status(200).json(restaurant)
      : res.status(404).send('Restaurant not found');
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

const getRestaurantByUserId = async (req, res) => {
  const { id } = req.params;

  try {
    const restaurant = await Restaurant.findOne({ where: { id } });

    restaurant
      ? res.status(200).json(restaurant)
      : res.status(404).send('Restaurant not found');
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
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
      : res.status(404).send('No se han encontrado restaurants');
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

const createRestaurant = async (req, res) => {
  const {
    role_id,
    user_id,
    name,
    description,
    speciality,
    address,
    phone_number,
    city,
    time_close,
    time_open,
    image,
  } = req.body;

  if (role_id !== 2)
    return res.status(401).send('Authorized only for restaurants');

  try {
    const newRestaurant = await Restaurant.create({
      user_id,
      name,
      description,
      speciality,
      address,
      phone_number,
      city,
      time_close,
      time_open,
      image,
    });

    //this variable contains the validate token
    const token = createToken(newRestaurant.id);
    res
      .status(201)
      .json({ error: false, restaurant: newRestaurant, Token: token });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const restaurant = await Restaurant.findOne({ where: { id } });
    if (!restaurant) {
      res.status(404).send('Restaurant not found');
    }
    await restaurant.update(body);
    res
      .status(202)
      .json({ message: 'Restaurant updated', restaurant: restaurant });
  } catch (err) {
    console.log({ body: body });
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  try {
    const meal = await Restaurant.findOne({ where: { id: id } });
    if (meal) {
      await Restaurant.destroy({ where: { id: id } });
      return res.status(202).send('Restaurant eliminado');
    } else {
      return res.status(404).send('Restaurant no encontrado');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getRestaurants,
  getRestaurant,
  getRestaurantByCity,
  updateRestaurant,
  createRestaurant,
  deleteRestaurant,
  getRestaurantByUserId,
};
