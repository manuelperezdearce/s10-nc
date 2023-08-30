const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config');
const { Customers } = require('./customer.model');
const { Restaurant } = require('./restaurant.model');

class User extends Model {}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
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
    modelName: 'User',
    timestamps: false,
  },
);

User.hasMany(Customers, {
  foreignKey: 'User_Id',
  sourceKey: 'id',
});
Customers.belongsTo(User, {
  foreignKey: 'User_Id',
  targetKey: 'id',
});

User.hasMany(Restaurant, {
  foreignKey: 'User_Id',
  sourceKey: 'id',
});
Restaurant.belongsTo(User,{
  foreignKey: 'User_Id',
  targetKey: 'id',
});

module.exports = { User };
