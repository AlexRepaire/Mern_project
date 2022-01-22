import jwt from "jsonwebtoken";
//import config from 'config';
import { } from 'dotenv/config';

export default function (req, res, next) {
    const token = req.get("Authorization");

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, /*config.get('jwtSecret')*/ process.env.JWT_SECRET);

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }

}