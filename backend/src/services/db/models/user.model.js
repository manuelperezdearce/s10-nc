const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class User extends Model {}

User.init(
  {
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'User',
    timestamps: false,
  },
);

module.exports = { User };
