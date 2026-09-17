const { Router } = require('express');
const authRouter = Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");
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

authRouter.post("/login",authController.loginUserController);

/**
 * @route get/api/auth/logout
 * @description clear token from user cookie and blacklist token on logout
 * @access public 
 */

authRouter.get("/logout",authController.logoutUserController);

/**
 * @route get/api/auth/get-me
 * @description get the current login user details
 * @access private
 */

authRouter.get("/get-me",authMiddleware.authUser,)

module.exports = authRouter;