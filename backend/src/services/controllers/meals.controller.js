const { Meals } = require('../db/models/meal.model');

const getMeals = async (req, res) => {
  try {
    const meals = await Meals.findAll();
    res.status(200).json(meals);
  } catch (err) {
    console.log(err);
  }
};

const getMeal = async (req, res) => {
  const { id } = req.params;
  try {
    const meal = await Meals.findByPk(id);
    res.status(200).json(meal);
  } catch (err) {
    console.log(err);
  }
};

// /meal/:catId
const getMealsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const meals = await Meals.findAll({
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
    const newMeal = await Meals.create(body);
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
    const updatedMeal = await Meals.update(
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

const deleteMeal = async (req, res) => {
  const { id } = req.params;

  try {
    const meal = await Meals.findOne({ where: { id: id } });
    if (meal) {
      await Meals.destroy({ where: { id: id } });
      return res.status(202).send('Platillo eliminado');
    } else {
      return res.status(400).send('Platillo no encontrado');
    }
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
  deleteMeal,
};
