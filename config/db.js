import mongoose from "mongoose";
//import config from "config";
import { } from 'dotenv/config';

const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

export default connectDB;