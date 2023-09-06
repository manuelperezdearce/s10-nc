const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config');

class DetailsOrder extends Model {}

DetailsOrder.init(
  {
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
    order_id: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: 'Orders',
        key: 'id',
      },
    },
    meal_id: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: 'Meals',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'DetailsOrder',
    timestamps: false,
  },
);
/* type: DataTypes.ARRAY(DataTypes.STRING), */
module.exports = { DetailsOrder };
