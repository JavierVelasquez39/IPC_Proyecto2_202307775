import express from 'express';
import bodyParser from "body-parser";
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import { createPost } from './controllers/posts.js';

const app = express();

// Middleware bodyParser
app.use(bodyParser.json());

// Middleware cors
app.use(cors());    

app.use("/api/auth", authRoutes);
app.post("/api/create", createPost); // http://localhost:3000/api/create
app.use("/api/posts", postRoutes);
app.use("/api/register", authRoutes);
app.use("/api/users", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
