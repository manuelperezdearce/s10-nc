const { Model, DataTypes } = require('sequelize');
const  sequelize  = require('../config');
const { Meals } = require("../models/meal.model");

class Category extends Model {}

Category.init({

  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
}, {
  sequelize,
  modelName: 'Category',
  timestamps: false
});

Category.hasMany(Meals, {
    foreignKey: 'category_id',
    sourceKey:'id'
  });
Meals.belongsTo(Category,{
  foreignKey: 'category_id',
  targetKey:'id'
});

module.exports = { Category };
