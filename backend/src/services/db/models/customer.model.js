const { Model, DataTypes, Sequelize } = require('sequelize');
const  sequelize  = require('../config');
const { Orders } = require("../models/order.model");


class Customers extends Model {}

Customers.init({

  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(30),
  },
  adress: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING(10),
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}, {
  sequelize,
  modelName: 'Customers',
  timestamps: false
});

Customers.hasMany(Orders, {
  foreignKey: 'user_id',
  sourceKey:'id'
});
Orders.belongsTo(Customers,{
  foreignKey: 'user_id',
  targetKey:'id'
});

module.exports = { Customers };


