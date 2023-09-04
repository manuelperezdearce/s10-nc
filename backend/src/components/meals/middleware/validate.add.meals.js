const { schemaToCreateMeals } = require("../config/validateSchema/schemaToCreateMeals");

const validateAddMeals = (req,res,next) => {
    const body = req.body;

        const validate = schemaToCreateMeals.validate(body)
        if(validate.error){
            res.json({message:validate.error.message})
        }else{
            res.status(200)
            next()
        }
}

module.exports = {validateAddMeals}