const Joi = require('joi');

const schemaToGetOrderDetails = Joi.object({
    OrderId: Joi.number().integer().required(),
})


module.exports = {schemaToGetOrderDetails}
