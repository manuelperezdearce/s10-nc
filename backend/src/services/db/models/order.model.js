const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config');
const { Meals } = require("../models/meal.model");
const { DetailsOrder } = require("../models/details.order");

class Orders extends Model {}

Orders.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  totalPrice: {
    allowNull: false,
    field: 'total_price',
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}, {
  sequelize,
  modelName:'Orders',
  timestamps: false
});

Orders.belongsToMany(Meals, { through: DetailsOrder });
Meals.belongsToMany(Orders, { through: DetailsOrder });

module.exports = { Orders };
