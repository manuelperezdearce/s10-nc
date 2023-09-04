const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config');
const { Meals } = require("../models/meal.model");
const { User } = require('./user.model');

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
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone_number: {
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
  time_open: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'time_open',
  },
  time_close: {
    allowNull: false,
    type: DataTypes.STRING,
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
  foreignKey: 'restaurant_id',
  sourceKey:'id'
});
Meals.belongsTo(Restaurant,{
  foreignKey: 'restaurant_id',
  targetKey:'id'
});
Restaurant.hasMany(User, {
  foreignKey: 'restaurant_id',
  sourceKey:'id'
});
User.belongsTo(Restaurant,{
  foreignKey: 'restaurant_id',
  targetKey:'id'
});

module.exports = { Restaurant };
