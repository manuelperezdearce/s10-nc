const { Op } = require('sequelize');
const { Restaurant } = require('../db/models/restaurant.model');
const { createRestaurantAsUser } = require('../tableRelationshipManager/restaurantInUsers');
const { createToken } = require('../auth');

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
    const restaurant = Restaurant.findOne({
      where: id
    });
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

  if( role_id !== 2) return res.status(401).send('Authorized only for restaurants')

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
    res.status(200).json({Error:false, restaurant:newRestaurant,Token:token});

  }catch (err) {
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

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  try {
    const meal = await Restaurant.findOne({ where: { id: id } });
    if (meal) {
      await Restaurant.destroy({ where: { id: id } });
      return res.status(202).send('Restaurant eliminado');
    } else {
      return res.status(400).send('Restaurant no encontrado');
    }
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
  deleteRestaurant,
};
