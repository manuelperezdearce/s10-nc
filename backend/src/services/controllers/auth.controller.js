const { User } = require('../db/models/user.model');
const bcrypt = require('bcrypt');
const { createToken } = require('../auth');
const { Customers } = require('../db/models/customer.model');
const { Restaurant } = require('../db/models/restaurant.model');

require('dotenv').config();

const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ where: { email: email } });

    if (!foundUser) return res.status(400).send('User not found');

    let matchPassword = await bcrypt.compare(password, foundUser.password);

    if (!matchPassword) return res.status(401).send('Invalid password');

    let roleUser;

    if (foundUser.role_id === 1) {
      roleUser = await Customers.findOne({ where: { user_id: foundUser.id } });
    } else if (foundUser.role_id == 2) {
      roleUser = await Restaurant.findOne({ where: { user_id: foundUser.id } });
    }

    const payload = {
      user_id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      role_id: foundUser.role_id,
      role_name: foundUser.role_id === 1 ? 'Customer' : 'Restaurant',
      idByRole: roleUser.id,
    };

    const token = createToken(payload);

    res.json({
      message: 'Authenticated user',
      token: token,
      ...payload,
    });
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
};

const signUp = async (req, res) => {
  const { email, password, role_id } = req.body;

  const foundUser = await User.findOne({ where: { email: email } });

  if (foundUser)
    return res.status(409).send('this email is already registered');

  let passwordHash = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      role_id,
      email,
      password: passwordHash,
    });

    let newRole;

    if (role_id === 1) {
      newRole = await Customers.create({
        name: '',
        address: '',
        phone_number: 0,
        user_id: newUser.id,
      });
    } else if (role_id === 2) {
      newRole = await Restaurant.create({
        name: '',
        speciality: '',
        city: '',
        address: '',
        description: '',
        phone_number: '0',
        time_open: '',
        time_close: '',
        user_id: newUser.id,
      });
    }

    res.json({
      error: false,
      message: 'user created successfully',
      user: {
        email: newUser.email,
        id: newUser.id,
        role_id: newUser.role_id,
      },
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  signIn,
  signUp,
};
