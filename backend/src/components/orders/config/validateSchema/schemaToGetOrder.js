const Joi = require('joi');

const schemaToGetOrder = Joi.object({
    user_id:Joi.number().integer().required(),
})


module.exports = {schemaToGetOrder}
