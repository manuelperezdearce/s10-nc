const { Model, DataTypes, Sequelize } = require('sequelize');
const  sequelize  = require('../config');
const { Orders } = require("../models/order.model");
const { User } = require('./user.model');


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
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone_number: {
    allowNull: false,
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
  modelName: 'Customers',
  timestamps: false
});

Customers.hasMany(Orders, {
  foreignKey: 'customer_id',
  sourceKey:'id'
});
Orders.belongsTo(Customers,{
  foreignKey: 'customer_id',
  targetKey:'id'
});
User.hasOne(Customers, {
  foreignKey: 'user_id',
  sourceKey: 'id',
});
Customers.belongsTo(User, {
  foreignKey: 'user_id',
  targetKey: 'id',
});

module.exports = { Customers };


