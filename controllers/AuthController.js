import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
//import config from "config";
import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import { } from 'dotenv/config';

const postLogin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        console.log(email);
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Informations' }] })
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Informations' }] })
        }

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

export default { postLogin };