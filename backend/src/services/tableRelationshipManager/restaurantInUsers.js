const bcrypt = require('bcrypt');
const { User } = require('../db/models/user.model');

const createRestaurantAsUser = async (id,req) => {
    const { email, password } = req.body;
    let passwordHash = await bcrypt.hash(password, 10);
  
    await User.create({
      restaurant_id:id,
      role_id:2,
      email,
      password: passwordHash,
    });
};

module.exports = { createRestaurantAsUser }