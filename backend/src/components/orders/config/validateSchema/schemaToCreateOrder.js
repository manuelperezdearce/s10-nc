const Joi = require('joi');

const schemaToCreateOrder = Joi.object({
    customer_id:Joi.number().integer().required(),
    total_price:Joi.string().required(),
    meal_id:Joi.string().required(),
    quantity:Joi.number().positive().required(),
})
/* meal_id:Joi.array().items(Joi.string()).required(), */

module.exports = {schemaToCreateOrder}
