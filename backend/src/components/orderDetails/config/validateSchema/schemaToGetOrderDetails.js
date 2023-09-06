const Joi = require('joi');

const schemaToGetOrderDetails = Joi.object({
    OrderId: Joi.string().required(),
})


module.exports = {schemaToGetOrderDetails}