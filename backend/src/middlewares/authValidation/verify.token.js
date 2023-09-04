const { verifyToken } = require("../../services/auth");

const verifyTokenMiddleware = async (req, res, next) => {
  const token = req.token;
  try {
    const isValidate = await verifyToken(token);
    if (!isValidate) {
     return res.json({
        status: 403,
        message: 'unauthorized',
      });
    } 
    next();
  } catch (err) {
    return res.json({
      status: 400,
      message: err.message,
    });
  }
};

module.exports = { verifyTokenMiddleware };
