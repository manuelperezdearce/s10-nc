const Joi = require('joi');

const schemaToCreateMeals= Joi.object({
    id:Joi.string().required(),
    name:Joi.string().required(),
    price:Joi.number().required(),
    image:Joi.string().required(),
    category_id:Joi.number().integer().required(),
    restaurant_id:Joi.number().integer().required(),
    role_id:Joi.number().integer().required(),
    description:Joi.string().required(),
    is_vegan:Joi.boolean().required(),
    is_glutenfree:Joi.boolean().required(),
    is_proteinplus:Joi.boolean().required(),
})


module.exports = {schemaToCreateMeals}
