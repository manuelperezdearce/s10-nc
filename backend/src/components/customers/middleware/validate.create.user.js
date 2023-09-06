const { schemaToCreateCustomer } = require("../config/validateSchema/schemaToCreateCustomer");

const validateCreateCustomer = (req,res,next) => {
    const body = req.body;

        const validate = schemaToCreateCustomer.validate(body)
        if(validate.error){
            res.json({message:validate.error.message})
        }else{
            res.status(200)
            next()
        }
}

module.exports = {validateCreateCustomer}