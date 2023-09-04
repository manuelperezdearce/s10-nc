const {schemaToCreateCategories} = require('../config/validateSchema/schemaToCreateCategories');

const validateCreateCategories = (req, res, next) => {
  const body = req.body;
  const validate = schemaToCreateCategories.validate(body);
  if (validate.error) {
    return res.json({ message: validate.error.message });
  }
  next();
};

module.exports = { validateCreateCategories };
