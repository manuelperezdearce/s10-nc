const { Router } = require('express');
const { createRole, getRoles } = require('../../../services/controllers/roles.controller');
const { validateAddRoles } = require('../middleware/validate.add.role');

const roleRouter = Router();

// Path to get all roles
roleRouter.get('/', getRoles)
// Path to create roles
// validateAddRoles is a middleware to validate the request payload
roleRouter.post('/add', validateAddRoles,createRole)

module.exports = roleRouter;