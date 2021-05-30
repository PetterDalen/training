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
    const { creator, title, status, description, date } = req.body;

    const newWorkoutMessage = new WorkoutMessage({ creator, title, status, description })

    try {
        await newWorkoutMessage.save();

        res.status(201).json(newWorkoutMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Ingen workouts med den id-en');

    await WorkoutMessage.findByIdAndRemove(id);

    res.json({ message: 'Workout slettet' });

}

export const checkWorkout = async (req, res) => {
    const { id } = req.params;
    const workout = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Ingen workouts med den id-en');

    const checkedWorkout = await WorkoutMessage.findByIdAndUpdate(id, workout, { new: true });

    res.json({ checkedWorkout });
}




export default router;