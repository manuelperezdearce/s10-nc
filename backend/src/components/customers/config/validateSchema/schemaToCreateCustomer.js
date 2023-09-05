const Joi = require('joi');

const schemaToCreateCustomer = Joi.object({
    role_id:Joi.number().integer().required(),
    user_id:Joi.number().integer().required(),
    name:Joi.string().required(),
    address:Joi.string().required(),
    phone_number:Joi.number().positive().required(),
})


module.exports = {schemaToCreateCustomer}
