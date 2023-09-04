const Joi = require('joi');

const schemaToCreateRestaurant= Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required(),
    speciality:Joi.string().required(),
    address:Joi.string().required(),
    phone_number:Joi.number().positive().required(),
    city: Joi.string().required(),
    time_close:Joi.string().required(),
    time_open:Joi.string().required(),
    image: Joi.string().required(),  
    email: Joi.string().email().required(), 
    password: Joi.string().min(8).required(), 
})

module.exports = {schemaToCreateRestaurant}