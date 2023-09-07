const { schemaToCreateRoles } = require("../config/validateSchema/schemaToCreateRoles");

const validateAddRoles = (req,res,next) => {
    const body = req.body;

        const validate = schemaToCreateRoles.validate(body)
        if(validate.error){
            res.json({message:validate.error.message})
        }else{
            res.status(200)
            next()
        }
  
    
}

module.exports = {validateAddRoles}