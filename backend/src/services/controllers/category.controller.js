const Category = require('../../db/models/category.model');

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({
      name,
    });
    res.status(201).json(category);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCategories,
  createCategory,
};
