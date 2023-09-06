const jwt = require('jsonwebtoken');
const { secret } = require('../2FA');

const SECRET = secret();

const createToken = (id) => {
  const token = jwt.sign({ id }, SECRET, {
    expiresIn: 86400,
  });
  return token;
};
const validateToken = (req) => {
  const bearerHeader = req.headers['authorization'];

  if (!bearerHeader || !bearerHeader.startsWith('Bearer')) {
    throw new Error('no se ha recibido el token');
  } else {
    req.token = bearerHeader.split(' ')[1];
  }
};

const verifyToken = (token) => {
  if (!token) {
    throw new Error('debe proporcionar un token');
  } else {
    const verifyToken = jwt.verify(token, SECRET);
    return verifyToken
  }
};

module.exports = { createToken, validateToken, verifyToken };
