const { Category } = require('../db/models/category.model');

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

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const meal = await Category.findOne({ where: { id: id } });
    if (meal) {
      await Category.destroy({ where: { id: id } });
      return res.status(202).send('Categoria eliminado');
    } else {
      return res.status(400).send('Categoria no encontrada');
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
};
