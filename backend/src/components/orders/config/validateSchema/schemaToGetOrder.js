const Joi = require('joi');

const schemaToGetOrder = Joi.object({
    user_id:Joi.string().min(8).required(),
})


module.exports = {schemaToGetOrder}