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

Roles.hasMany(User, {
  foreignKey: 'Role_Id',
  sourceKey:'id'
});
User.belongsTo(Roles,{
  foreignKey: 'Role_Id',
  targetKey:'id'
});

module.exports = { Roles };
