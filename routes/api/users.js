import { Router } from "express";
import { check } from "express-validator";
import UsersController from "../../controllers/UsersController.js";
const router = Router();

/**
 * @route       POST api/users
 * @description Register user
 * @access      Public
 * 
 */
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', "Please include a valid email").isEmail(),
    check('password', "Please enter a password with 6 or more characters").isLength({ min: 6 })
], UsersController.postSignup);



export default router;