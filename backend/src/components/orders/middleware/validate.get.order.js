const { schemaToGetOrder } = require("../config/validateSchema/schemaToGetOrder");

const validateGetOrder = (req,res,next) => {
    const body = req.body;
        const validate = schemaToGetOrder.validate(body)
        if(validate.error){
            res.json({message:validate.error.message})
        }else{
            res.status(200)
            next()
        }
}

module.exports = {validateGetOrder}