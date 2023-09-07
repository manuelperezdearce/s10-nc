const { User } = require('../db/models/user.model');
const bcrypt = require('bcrypt');
const { createToken } = require('../auth');

require('dotenv').config();

const signIn = async (req, res,next) => {
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
    next()
  }
  catch (err){
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
}

const signUp = async (req,res) => {
    const { email, password,role_id } = req.body;

    const foundUser = await User.findOne({ where: { email: email } });
  
    if (foundUser) return res.status(409).send('this email is already registered');

    let passwordHash = await bcrypt.hash(password, 10);
    
  try{
    const newUser = await User.create({
      role_id,
      email,
      password: passwordHash,
    });
    res.json({
      error:false,
      message:"user created successfully",
      data:newUser
    })
  }catch (err){
    console.log(err.message)
    return res.json.status(500).send('Internal Server Error')
  }


};

module.exports = {
  signIn,
  signUp
};
