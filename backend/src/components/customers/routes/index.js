const { Router } = require('express');
const {validateCreateCustomer} = require('../middleware/validate.create.user');
const { getCustomers, createCustomer, updateCustomer, getCustomer, getCustomerByUserId, deleteCustomer } = require('../../../services/controllers/customers.controller');
const customerRouter = Router();

// Route to get all customers
customerRouter.get('/',getCustomers);

// Route to get a customer by id
customerRouter.get('/:id',getCustomer);
customerRouter.delete('/:id',deleteCustomer);
customerRouter.get('/user/:id',getCustomerByUserId);

// Route to create customers
customerRouter.post('/add',validateCreateCustomer,createCustomer);

// Route to update customers
customerRouter.put('/:id',updateCustomer);


module.exports = customerRouter;
