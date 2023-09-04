const Joi = require('joi');

const requireId = Joi.object({
    id:Joi.string().required(),
})


module.exports = {requireId}