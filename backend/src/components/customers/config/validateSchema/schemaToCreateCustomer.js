const Joi = require('joi');

const schemaToCreateCustomer = Joi.object({
    name:Joi.string().required(),
    address:Joi.string().required(),
    phone_number:Joi.number().positive().required(),
    password:Joi.string().min(8).required(),
    email:Joi.string().email().required(),
})


module.exports = {schemaToCreateCustomer}