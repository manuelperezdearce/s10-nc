const { requireId } = require('../../services/global/validateSchema/requireId');

const requireIdMiddleware = (req, res, next) => {
  const body = req.body;
  const validate = requireId.validate(body);
  if (validate.error) {
    return res.json({ message: validate.error.message });
  }
  next();
};

module.exports = { requireIdMiddleware };
