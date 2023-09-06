const Joi = require('joi');

const schemaDeleteMeals= Joi.object({
    id:Joi.string().required(),
})


module.exports = {schemaDeleteMeals}