const { Model, DataTypes, Sequelize } = require('sequelize');

const RESTAURANT_TABLE = 'restaurants';

const RestaurantSchema = {
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
};

class Restaurant extends Model {
  static associate() {
    // asociar
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: RESTAURANT_TABLE,
      modelName: 'Restaurant',
      timestamps: false,
    };
  }
}

module.exports = { Restaurant, RestaurantSchema, RESTAURANT_TABLE };
