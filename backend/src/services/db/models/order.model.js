const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config');
const { Meals } = require('../models/meal.model');
const { DetailsOrder } = require('../models/details.order');

class Orders extends Model {}

Orders.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    total_price: {
      allowNull: false,
      field: 'total_price',
      type: DataTypes.INTEGER,
    },
    total_quantity: {
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
  },
  {
    sequelize,
    modelName: 'Orders',
    timestamps: false,
  },
);

// Orders.belongsToMany(Meals, { through: DetailsOrder, foreignKey: 'order_id',  });
// Meals.belongsToMany(Orders, { through: DetailsOrder, foreignKey: 'meal_id', });

Orders.hasMany(DetailsOrder, { foreignKey: 'order_id', sourceKey: 'id' });
DetailsOrder.belongsTo(Orders, { foreignKey: 'order_id', targetKey: 'id' });
DetailsOrder.belongsTo(Meals, { foreignKey: 'meal_id', targetKey: 'id' });
Meals.hasMany(DetailsOrder, { foreignKey: 'meal_id', sourceKey: 'id' });

module.exports = { Orders };
