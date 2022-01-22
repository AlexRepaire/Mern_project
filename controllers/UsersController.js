import User from "../models/User.js";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//import config from "config";
import { validationResult } from "express-validator";
import { } from 'dotenv/config'

const postSignup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User exist' }] })
        }

        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        user = new User({
            name,
            email,
            avatar,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id //mongoose abstraction , pas besoin d'utiliser le _id
            }
        }

        jwt.sign(payload, /*config.get('jwtSecret')*/ process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export default { postSignup };