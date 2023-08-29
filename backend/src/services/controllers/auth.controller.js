const { User } = require('../db/models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

// 24 hrs = 86400

const signUp = async (req, res) => {
  const { email, password, roleId } = req.body;
  let passwordHash = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    email,
    Role_Id: roleId,
    password: passwordHash,
  });

  const token = jwt.sign({ id: newUser.userId }, process.env.SECRET, {
    expiresIn: 86400,
  });

  res.status(200).json({ token });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await User.findOne({ where: { email: email } });

  if (!foundUser) return res.status(400).send('User not found');

  let matchPassword = await bcrypt.compare(password, foundUser.password);

  if (!matchPassword) return res.status(401).send('Invalid password');

  const token = jwt.sign({ id: foundUser.userId }, process.env.SECRET, {
    expiresIn: 86400,
  });

  res.json({
    message: 'Usuario autenticado',
    token: token,
    user: foundUser.email,
  });
};

module.exports = {
  signUp,
  signIn,
};
