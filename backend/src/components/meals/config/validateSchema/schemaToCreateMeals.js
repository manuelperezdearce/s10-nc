const Joi = require('joi');

const schemaToCreateMeals= Joi.object({
    name:Joi.string().required(),
    price:Joi.number().required(),
    image:Joi.string().required(),
    category_id:Joi.string().required(),
    restaurant_id:Joi.string().required(),
    role_id:Joi.string().required(),
    description:Joi.string().required(),    
    is_vegan:Joi.boolean().required(),
    is_glutenfree:Joi.boolean().required(),
    is_proteinplus:Joi.boolean().required(),
})


module.exports = {schemaToCreateMeals}