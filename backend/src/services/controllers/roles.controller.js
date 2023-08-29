const { Roles } = require('../db/models/role.model');

const getRoles = async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.status(200).json(roles);
  } catch (err) {
    console.log(err);
  }
};

const createRole = async (req, res) => {
  const { name } = req.body;
  try {
    const role = await Roles.create({
      name,
    });
    res.status(201).json(role);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRoles,
  createRole,
};
