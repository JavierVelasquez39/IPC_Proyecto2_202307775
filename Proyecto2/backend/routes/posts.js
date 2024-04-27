import express from 'express';
import { getPosts } from '../controllers/posts.js';
import { createPost } from '../controllers/posts.js';

const router = express.Router();

router.get("/get", getPosts)
router.get('/', getPosts);
router.get('/:id', getPostsById);
router.post('/', createPost);

export default router;  