const { User } = require('../db/models/user.model');
const bcrypt = require('bcrypt');
const { createToken } = require('../auth');

require('dotenv').config();

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try{
    const foundUser = await User.findOne({ where: { email: email } });
  
    if (!foundUser) return res.status(400).send('User not found');
  
    let matchPassword = await bcrypt.compare(password, foundUser.password);
  
    if (!matchPassword) return res.status(401).send('Invalid password');
  
    const token = createToken(foundUser.id)
  
    res.json({
      message: 'Authenticated user',
      token: token,
      user: foundUser.email,
    });
  }
  catch (err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  signIn,
};
