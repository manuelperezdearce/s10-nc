const bcrypt = require('bcrypt');
const { User } = require('../db/models/user.model');

const createCustomerAsUser = async (id,req) => {
    const { email, password } = req.body;
    let passwordHash = await bcrypt.hash(password, 10);
  
    const newUser = await User.create({
      customer_id:id,
      role_id:1,
      email,
      password: passwordHash,
    });
  console.log(newUser)
};

module.exports = { createCustomerAsUser }