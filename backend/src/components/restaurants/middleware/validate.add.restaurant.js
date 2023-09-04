const { schemaToCreateRestaurant } = require("../config/validateSchema/schemaToCreateRestaurant");

const validateAddRestaurant = (req,res,next) => {
    const body = req.body;

        const validate = schemaToCreateRestaurant.validate(body)
        if(validate.error){
            res.json({message:validate.error.message})
        }else{
            res.status(200)
            next()
        }
  
    
}

module.exports = {validateAddRestaurant}