import express from 'express';
import bodyParser from "body-parser";
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/userRoutes.js'; // Importa userRoutes
import cors from 'cors';

const app = express();

// Middleware bodyParser
app.use(bodyParser.json()); // para peticiones apllication/json

// Middleware cors
app.use(cors());    

app.use("/api/auth", authRoutes); // http://localhost:3000/api/auth/login, http://localhost:3000/api/auth/user
app.use("/api/posts", postRoutes); // http://localhost:3000/api/posts/get
app.use("/api/register", authRoutes); // http://localhost:3000/api/register
app.use("/api/create", postRoutes); // http://localhost:3000/api/create
app.use("/api/users", userRoutes); // http://localhost:3000/api/users/bulk

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
