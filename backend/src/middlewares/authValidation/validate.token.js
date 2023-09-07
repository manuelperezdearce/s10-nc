
const validateTokenMiddleware = async (req, res, next) => {
  try {
    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader || !bearerHeader.startsWith('Bearer')) {
     return res.json({
        status:400,
        message:"token no valido"
      })
    } else {
      req.token = bearerHeader.split(' ')[1];
    }
    next();
  } catch (err) {
    console.log(err.message)
    
  }
};

module.exports = { validateTokenMiddleware };
