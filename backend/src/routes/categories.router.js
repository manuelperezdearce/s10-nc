const express = require('express');
const CategoryService = require('../services/category.service');

const router = express.Router();
const service = new CategoryService();

router.get('/', async (req, res) => {
  try {
    const categories = await service.find();
    res.json(categories);
  } catch (error) {
    // next(error);
    console.log(error)
  }
});

module.exports = router;
