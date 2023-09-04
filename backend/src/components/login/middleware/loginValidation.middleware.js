const { loginValidationSchema } = require("../config/validationSchemes/loginValidationSchema");

const loginValidation = (req,res,next) => {
    const body = req.body;

        const validate = loginValidationSchema.validate(body)
        if(validate.error){
          return res.json({message:validate.error.message})
        }
        next()
}

module.exports = {loginValidation}