const { Router } = require('express');
const { validateAddMeals } = require('../middleware/validate.add.meals');
const { createMeal, getMeals, deleteMeal, updateMeal, getMeal, getMealsByQuery } = require('../../../services/controllers/meals.controller');
const { validateTokenMiddleware } = require('../../../middlewares/authValidation/validate.token');
const { verifyTokenMiddleware } = require('../../../middlewares/authValidation/verify.token');

const mealRouter = Router();

// Path to get meal by id
mealRouter.get('/:id', getMeal)
mealRouter.get('/search',getMealsByQuery);

// Path to get all meals
mealRouter.get('/',getMeals);
// Path to create meals
mealRouter.post(
  '/add',
  validateAddMeals,
  validateTokenMiddleware,
  verifyTokenMiddleware,
  createMeal
);
// Path to update meals by restaurant id, the restaurant must have a validation token
mealRouter.put('/:id',validateTokenMiddleware,verifyTokenMiddleware,updateMeal)

// Path to delete meals by restaurant id, the restaurant must have a validation token
mealRouter.delete('/:id',validateTokenMiddleware,verifyTokenMiddleware,deleteMeal);


module.exports = mealRouter;
