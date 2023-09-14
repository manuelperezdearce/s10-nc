const Joi = require('joi');

const registationValidationSchema= Joi.object({
    role_id:Joi.number().integer().required(),
    email:Joi.string().email().required(),
    password:Joi.string().required(),
})
const loginValidationSchema= Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required(),
})

module.exports = {loginValidationSchema,registationValidationSchema}
