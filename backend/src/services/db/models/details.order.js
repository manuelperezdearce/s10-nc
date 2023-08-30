const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config');


class DetailsOrder extends Model {}

DetailsOrder.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  
}, {
  sequelize,
  modelName: 'DetailsOrder',
  timestamps: false
});

module.exports = { DetailsOrder };
