const Joi = require('joi');

const schemaToCreateRestaurant= Joi.object({
    role_id:Joi.number().integer().required(),
    user_id:Joi.number().integer().required(),
    name:Joi.string().required(),
    description:Joi.string().required(),
    speciality:Joi.string().required(),
    address:Joi.string().required(),
    phone_number:Joi.string().required(),
    city: Joi.string().required(),
    time_close:Joi.string().required(),
    time_open:Joi.string().required(),
    // image: Joi.string().required(),
})

module.exports = {schemaToCreateRestaurant}
