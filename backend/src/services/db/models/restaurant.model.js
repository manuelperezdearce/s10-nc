const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config');
const { Meals } = require("../models/meal.model");
const { Orders } = require('./order.model');

class Restaurant extends Model {}

Restaurant.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  speciality: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  adress: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  timeOpen: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'time_open',
  },
  timeClose: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'time_close',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}, {
  sequelize,
  modelName: 'Restaurant',
  timestamps: false
});

Restaurant.hasMany(Meals, {
  foreignKey: 'Restaurant_id',
  sourceKey:'id'
});
Meals.belongsTo(Restaurant,{
  foreignKey: 'Restaurant_id',
  targetKey:'id'
});
Restaurant.hasMany(Orders, {
  foreignKey: 'Restaurant_id',
  sourceKey:'id'
});
Orders.belongsTo(Restaurant,{
  foreignKey: 'Restaurant_id',
  targetKey:'id'
});

module.exports = { Restaurant };
