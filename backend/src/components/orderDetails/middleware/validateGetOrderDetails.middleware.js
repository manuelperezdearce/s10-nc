const { schemaToGetOrderDetails } = require("../config/validateSchema/schemaToGetOrderDetails");

const validateGetOrderDetailMiddleware = (req,res,next) => {
    const body = req.body;
        const validate = schemaToGetOrderDetails.validate(body)
        if(validate.error){
            res.json({message:validate.error.message})
        }else{
            res.status(200)
            next()
        }
}

module.exports = {validateGetOrderDetailMiddleware}