import WorkoutMessage from '../models/workoutMessage.js';

export const getWorkouts = async (req, res) => {
    try {
        const workoutMessages = await WorkoutMessage.find();
        
        console.log("workoutMessages")
        console.log(workoutMessages);

        res.status(200).json(workoutMessages);
    } catch (error) {
         res.status(404).json({ message: error.message });
    }
}

export const createWorkout = async (req, res) => {
    const workout = req.body;

    console.log("controller")

    const newWorkout = new WorkoutMessage(workout);

    try {
        await newWorkout.save();

        console.log("newWorkout")
        console.log(newWorkout)

        res.status(201).json(newWorkout)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}