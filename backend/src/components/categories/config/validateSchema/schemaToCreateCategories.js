const Joi = require('joi');

const schemaToCreateCategories = Joi.object({
    name:Joi.string().required(),
})


module.exports = {schemaToCreateCategories}