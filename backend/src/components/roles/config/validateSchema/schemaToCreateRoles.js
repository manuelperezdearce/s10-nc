const Joi = require('joi');

const schemaToCreateRoles= Joi.object({
    name:Joi.string().required(),
})


module.exports = {schemaToCreateRoles}