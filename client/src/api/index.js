
import axios from 'axios';

const url = 'http://localhost:5001/workouts';

export const getWorkouts = () => axios.get(url);
export const createWorkout = (newWorkout) => axios.post(url, newWorkout);
