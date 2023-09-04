const { Router } = require('express');
const { loginValidation } = require('../middleware/loginValidation.middleware');
const { signIn } = require('../../../services/controllers/auth.controller');

const loginRouter = Router();

// Path for the user's login 
// loginValidation is a middleware to validate the request payload
// signIn is a controller for authenticating and verifying the user credentials
loginRouter.post('/',loginValidation,signIn);

module.exports = loginRouter;