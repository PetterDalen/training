import express from 'express';
import mongoose from 'mongoose';

import WorkoutMessage from '../models/workoutMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const workoutMessagee = await WorkoutMessage.find();
                
        res.status(200).json(workoutMessagee);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const workout = await WorkoutMessage.findById(id);
        
        res.status(200).json(workout);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createWorkout = async (req, res) => {
    const { creator, title, status, date } = req.body;

    const newWorkoutMessage = new WorkoutMessage({ creator, title, status })

    try {
        await newWorkoutMessage.save();

        res.status(201).json(newWorkoutMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}




export default router;