const sequelize = require('../libs/sequelize');
class CategoryService {
  constructor() {}

  async find() {
    const categories = await sequelize.models.Category.findAll();
    return categories;
  }
}

module.exports = CategoryService;
