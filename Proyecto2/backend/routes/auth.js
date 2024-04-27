import express from 'express';
import { login, register } from '../controllers/auth.js';

const router = express.Router();

router.post("/login", login)
router.post("/register", register)
router.post("/create", createPost)

export default router;
