const { Router } = require('express');
const authRouter = Router();
const authController = require("../controllers/auth.controller");

/**
 * 
 * @route Post /api/auth/register
 * @description Register a new user 
 * @access public 
 */

authRouter.post("/register",authController.registerUserController);

/**
 * @name login Route
 * @route Post /api/auth/login
 * @description login user with email and password.
 * @access Public
 */

authRouter.post("/login",authController.loginUserController)

module.exports = authRouter;