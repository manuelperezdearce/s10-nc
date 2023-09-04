const { Router } = require('express');
const { validateCreateCategories } = require('../middleware/validate.create.categories');
const { getCategories, createCategory } = require('../../../services/controllers/categories.controller');
const categoriesRouter = Router();

// Path to get all categories
categoriesRouter.get('/',getCategories);

// Path to create categories
// validateCreateCategories is a middleware to validate the request payload
// createCategory is a controller to create categories
categoriesRouter.post('/add',validateCreateCategories,createCategory);

module.exports = categoriesRouter;