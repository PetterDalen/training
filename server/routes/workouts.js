
import express from 'express';

import { getPosts, getPost, createWorkout, deleteWorkout } from '../controllers/workouts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createWorkout);
router.get('/:id', getPost);
router.delete('/:id', deleteWorkout);

export default router;