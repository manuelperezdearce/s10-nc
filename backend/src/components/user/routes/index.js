const { Router } = require('express');
const { loginValidation,  registrationValidation } = require('../middleware/userValidation.middleware');
const { signIn, signUp } = require('../../../services/controllers/auth.controller');

const userRouter = Router();

// Path for the user's login 
// loginValidation is a middleware to validate the request payload
// signIn is a controller for authenticating and verifying the user credentials
userRouter.post("/registration", registrationValidation,signUp)
userRouter.post('/login',loginValidation,signIn);

module.exports = userRouter;