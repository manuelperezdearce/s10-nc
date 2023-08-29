const { User, UserSchema } = require('./user.model');
const { Role, RoleSchema } = require('./role.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Restaurant, RestaurantSchema } = require('./restaurant.model');
const { Meal, MealSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderItem, OrderItemSchema } = require('./order-item.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Restaurant.init(RestaurantSchema, Restaurant.config(sequelize));
  Meal.init(MealSchema, Meal.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderItem.init(OrderItemSchema, OrderItem.config(sequelize));

  User.associate(sequelize.models);
  Role.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Restaurant.associate(sequelize.models);
  Category.associate(sequelize.models);
  Meal.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
