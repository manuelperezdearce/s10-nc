const { schemaToCreateOrder } = require("../config/validateSchema/schemaToCreateOrder");

const validateCreateOrder = (req,res,next) => {
    const body = req.body;

        const validate = schemaToCreateOrder.validate(body)
        if(validate.error){
            res.json({message:validate.error.message})
        }else{
            res.status(200)
            next()
        }
}

module.exports = {validateCreateOrder}