const { Model, DataTypes, Sequelize } = require('sequelize');
const  sequelize  = require('../config');

class Meals extends Model {}

Meals.init({
  id: {
    allowNull: false,
    // autoIncrement: true,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(30),
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  is_vegan: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  is_glutenfree: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  is_proteinplus: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}, {
  sequelize,
  modelName: 'Meals',
  timestamps: false
});

module.exports = { Meals };
