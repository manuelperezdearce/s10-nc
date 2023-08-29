const { Model, DataTypes, Sequelize } = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model');

const MEAL_TABLE = 'meals';

const MealSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
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
    type: DataTypes.TEXT,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  // restaurantId: {
  //   field: 'restaurant_id',
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: RESTAURANT_TABLE,
  //     key: 'id',
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'SET NULL',
  // },
};

class Meal extends Model {
  static associate() {
    // asociar
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MEAL_TABLE,
      modelName: 'Meal',
      timestamps: false,
    };
  }
}

module.exports = { Meal, MealSchema, MEAL_TABLE };
