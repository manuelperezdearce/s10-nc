const { loginValidationSchema, registationValidationSchema } = require("../config/validationSchemes/userValidationSchema");

const loginValidation = (req,res,next) => {
    const body = req.body;

        const validate = loginValidationSchema.validate(body)
        if(validate.error){
          return res.json({message:validate.error.message})
        }
        next()
}
const registrationValidation = (req,res,next) => {
  const body = req.body;

      const validate = registationValidationSchema.validate(body)
      if(validate.error){
        return res.json({message:validate.error.message})
      }
      next()
}

module.exports = {loginValidation, registrationValidation}