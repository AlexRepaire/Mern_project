import { Router } from "express";
import auth from "../../middleware/auth.js";
import User from "../../models/User.js";
import { check } from "express-validator";
import AuthController from "../../controllers/AuthController.js";
const router = Router();

/**
 * @route       GET api/auth
 * @description Test route
 * @access      Public
 * TODO DELETE METHOD
 */
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @route       POST api/auth
 * @description Authenticate user & get token
 * @access      Public
 */
router.post('/', [
    check('email', "Please include a valid email").isEmail(),
    check('password', "Password is required").exists()
], AuthController.postLogin);


export default router;