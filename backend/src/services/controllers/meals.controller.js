const Meal = require('../db/models/meals.model');

const getMeals = async (req, res) => {
  try {
    const meals = await Meal.findAll();
    res.status(200).json(meals);
  } catch (err) {
    console.log(err);
  }
};

const getMeal = async (req, res) => {
  const { id } = req.params;
  try {
    const meal = await Meal.findByPk(id);
    res.status(200).json(meal);
  } catch (err) {
    console.log(err);
  }
};

// /meal/:catId
const getMealsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const meals = await Meal.findAll({
      where: {
        categoryId: categoryId,
      },
    });
    meals
      ? res.status(200).json(meals)
      : res.status(400).send('No se han encontrado platillos');
  } catch (err) {
    console.log(err);
  }
};

const createMeal = async (req, res) => {
  const body = req.body;
  try {
    const newMeal = await Meal.create(body);
    newMeal;
    res.status(201).json(newMeal);
  } catch (err) {
    console.log(err);
  }
};

const updateMeal = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedMeal = await Meal.update(
      {
        body,
      },
      {
        where: {
          id: id,
        },
      },
    );
    updatedMeal
      ? res.status(201).json(updatedMeal)
      : res.status(400).send('Meal not found');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getMeals,
  getMeal,
  updateMeal,
  createMeal,
  getMealsByCategory,
};
