
import express from 'express';

import { getPosts, getPost, createWorkout } from '../controllers/workouts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createWorkout);
router.get('/:id', getPost);

export default router;