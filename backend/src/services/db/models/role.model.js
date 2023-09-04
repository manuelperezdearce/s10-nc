const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');
const { User } = require("../models/user.model");

class Roles extends Model {}

Roles.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
}, {
  sequelize,
  modelName: 'Roles',
  timestamps: false
});

Roles.hasMany(User,{
  foreignKey:"role_id"
});
User.belongsTo(Roles,{
  foreignKey:"role_id"
});

module.exports = { Roles };
