const { schemaDeleteMeals } = require("../config/validateSchema/schemaChange");

const validateDeleteMeals = (req,res,next) => {
    const body = req.body;

        const validate = schemaDeleteMeals.validate(body)
        if(validate.error){
            res.json({message:validate.error.message})
        }else{
            res.status(200)
            next()
        }
}

module.exports = {validateDeleteMeals}