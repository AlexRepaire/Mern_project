import express from "express";
import connectDB from "./config/db.js";
import userRoute from "./routes/api/users.js";
import authRoute from "./routes/api/auth.js";
import profileRoute from "./routes/api/profile.js";
import postsRoute from "./routes/api/posts.js";

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

//connection db
connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('API Running');
});

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoute);
app.use('/api/posts', postsRoute);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));