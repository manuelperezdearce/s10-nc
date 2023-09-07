const Joi = require('joi');

const schemaToCreateOrder = Joi.object({
  customer_id: Joi.number().integer().required(),
  total_price: Joi.number().integer().required(),
  meal_id: Joi.number().integer().required(),
  quantity: Joi.number().positive().required(),
  items: Joi.array()
    .items(
      Joi.object({
        meal_id: Joi.number().integer().required(),
        quantity: Joi.number().integer().required(),
      }),
    )
    .required(),
});
/* meal_id:Joi.array().items(Joi.string()).required(), */

module.exports = { schemaToCreateOrder };
