
import express from 'express';

import { getPosts, getPost, createWorkout, deleteWorkout, checkWorkout, updateWorkout } from '../controllers/workouts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createWorkout);
router.get('/:id', getPost);
router.delete('/:id', deleteWorkout);
router.patch('/:id', checkWorkout);
router.patch('/:id', updateWorkout);

export default router;