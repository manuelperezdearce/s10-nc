const Joi = require('joi');

const schemaToCreateCustomer = Joi.object({
    role_id:Joi.string().required(),
    user_id:Joi.string().required(),
    name:Joi.string().required(),
    address:Joi.string().required(),
    phone_number:Joi.number().positive().required(),
})


module.exports = {schemaToCreateCustomer}