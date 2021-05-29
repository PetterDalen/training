
import express from 'express';

import { getPosts, getPost, createWorkout, deleteWorkout, checkWorkout } from '../controllers/workouts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createWorkout);
router.get('/:id', getPost);
router.delete('/:id', deleteWorkout);
router.patch('/:id', checkWorkout);

export default router;